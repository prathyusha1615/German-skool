import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  MAIL_TO,
  PORT = 5000,
} = process.env;

// Support both names (older code and your .env)
const GOOGLE_SHEETS_WEBAPP_URL = (process.env.GOOGLE_SHEETS_WEBAPP_URL || process.env.APPS_SCRIPT_URL || '').trim();

// Normalize SMTP port (trim possible spaces)
const smtpPortNum = SMTP_PORT ? Number(String(SMTP_PORT).trim()) : undefined;

/* small helper */
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST || '',
  port: smtpPortNum || 587,
  secure: smtpPortNum === 465,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

transporter.verify()
  .then(() => console.log('SMTP ready'))
  .catch((err) => console.warn('SMTP warn:', err && err.message));

/* post to Google Sheets (Apps Script) with timeout */
async function postToGoogleSheets(payload, timeoutMs = 10000) {
  if (!GOOGLE_SHEETS_WEBAPP_URL) {
    throw new Error('GOOGLE_SHEETS_WEBAPP_URL not configured');
  }
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const resp = await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(id);

    const text = await resp.text();
    let parsed;
    try { parsed = text ? JSON.parse(text) : null; } catch (e) { parsed = { raw: text }; }

    if (!resp.ok) {
      const err = new Error(`Sheets returned ${resp.status}`);
      err.status = resp.status;
      err.body = parsed;
      throw err;
    }
    return { status: resp.status, body: parsed };
  } catch (err) {
    if (err.name === 'AbortError') throw new Error(`Timed out after ${timeoutMs}ms`);
    throw err;
  }
}

/* endpoint */
app.post('/api/submit', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      goal,
      germanLevel,
      startDate,
      learningNeeds,
      consent,
      countryCode,
      expertGuidance,

      // UTM fields coming from useTEF()
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    } = req.body || {};

    if (!fullName || !email) {
      return res
        .status(400)
        .json({ error: "Missing required fields fullName or email" });
    }

    // Ensure we always send a timestamp (ISO string)
    const timestamp = new Date().toISOString();

    // ---- Payload that goes to Google Sheets ----
const googleSheetPayload = {
  fullName,
  countryCode,
  phone,
  email,
  goal,
  germanLevel,
  startDate,
  learningNeeds,
  consent,
  expertGuidance,
  timestamp,
  utm_source,
  utm_medium,
  utm_campaign,
  utm_term,
  utm_content,
};


    // ---- Store in Google Sheet ----
    let gsResult;
    try {
      gsResult = await postToGoogleSheets(googleSheetPayload, 12000);
      console.log("Google Sheets result:", gsResult);
    } catch (err) {
      console.error(
        "Google Sheets error:",
        (err && err.message) || err
      );
      return res.status(502).json({
        error: "Failed to store in Google Sheets",
        details: (err && err.message) || String(err),
      });
    }

    // ---- Emails ----

    const userMailOptions = {
      from: MAIL_FROM,
      to: email,
      subject: "We received your request",
      html: `<h1>Thanks ${escapeHtml(fullName)}</h1>
             <p>We'll contact you shortly regarding ${escapeHtml(
               goal || ""
             )}.</p>
             <p>Submitted at: ${escapeHtml(timestamp)}</p>`,
    };

    const adminMailOptions = {
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `New Lead: ${fullName} - ${goal}`,
      html: `<h2>New Submission</h2>
             <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Phone:</strong> ${escapeHtml(phone || "")}</p>
             <p><strong>Country:</strong> ${escapeHtml(
               countryCode || ""
             )}</p>
             <p><strong>Goal:</strong> ${escapeHtml(goal || "")}</p>
             <p><strong>French Level:</strong> ${escapeHtml(
               germanLevel || ""
             )}</p>
             <p><strong>Start Date:</strong> ${escapeHtml(
               startDate || ""
             )}</p>
             <p><strong>Consent:</strong> ${escapeHtml(
               String(consent || "")
             )}</p>
             <p><strong>Expert Guidance:</strong> ${escapeHtml(
               String(expertGuidance || "")
             )}</p>
             <h3>UTM Info</h3>
             <p><strong>utm_source:</strong> ${escapeHtml(
               utm_source || ""
             )}</p>
             <p><strong>utm_medium:</strong> ${escapeHtml(
               utm_medium || ""
             )}</p>
             <p><strong>utm_campaign:</strong> ${escapeHtml(
               utm_campaign || ""
             )}</p>
             <p><strong>utm_term:</strong> ${escapeHtml(
               utm_term || ""
             )}</p>
             <p><strong>utm_content:</strong> ${escapeHtml(
               utm_content || ""
             )}</p>
             <p><strong>Submitted at:</strong> ${escapeHtml(
               timestamp
             )}</p>
             <pre>${JSON.stringify(gsResult).slice(0, 1000)}</pre>`,
    };

    // send user email
    try {
      await transporter.sendMail(userMailOptions);
      console.log("User mail sent");
    } catch (err) {
      console.warn("User mail failed:", (err && err.message) || err);
      // continue to admin mail
    }

    // send admin email
    try {
      await transporter.sendMail(adminMailOptions);
      console.log("Admin mail sent");
    } catch (err) {
      console.error("Admin mail failed:", (err && err.message) || err);
      return res
        .status(502)
        .json({ error: "Failed to send admin email", details: err && err.message });
    }

    return res.status(200).json({
      message: "Emails sent and data stored successfully",
      sheets: gsResult,
    });
  } catch (err) {
    console.error(
      "Unhandled /api/submit error:",
      (err && err.stack) || err
    );
    return res.status(500).json({
      error: "Internal server error",
      details: err && err.message,
    });
  }
});


/* health */
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

app.listen(Number(PORT), () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Google Sheets URL configured?', !!GOOGLE_SHEETS_WEBAPP_URL);
});
