// api/submit.js
import nodemailer from 'nodemailer';

function assertEnv() {
  const required = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASS',
    'MAIL_FROM',
    'MAIL_TO',
    'APPS_SCRIPT_URL',
  ];
  const missing = required.filter(k => !process.env[k]);
  if (missing.length) {
    throw new Error(`Missing env vars: ${missing.join(', ')}`);
  }
  // Validate URL & scheme
  try {
    const u = new URL(process.env.APPS_SCRIPT_URL);
    if (u.protocol !== 'https:') {
      throw new Error('APPS_SCRIPT_URL must start with https://');
    }
  } catch (e) {
    throw new Error(`Invalid APPS_SCRIPT_URL: ${e.message}`);
  }
}

async function storeInGoogleSheet(payload) {
  const url = process.env.APPS_SCRIPT_URL;

  // Optional: add a timeout so the function doesn’t hang
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 8000); // 8s

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    // Handle non-2xx explicitly
    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      throw new Error(`Sheets responded ${resp.status}: ${text}`);
    }

    // Expect JSON like { status: "success" }
    let result = {};
    try {
      result = await resp.json();
    } catch {
      // If your Apps Script returns text, adjust as needed
      throw new Error('Sheets response was not valid JSON');
    }

    if (result.status !== 'success') {
      throw new Error('Sheets reported failure');
    }
  } catch (err) {
    // Surface precise reason up the stack
    throw new Error(`Google Sheets error: ${err.message}`);
  } finally {
    clearTimeout(t);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    assertEnv();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

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
    expertGuidance, // in case you pass it through
  } = req.body || {};

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // TRUE for 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Optional: verify SMTP creds early (helps with faster failures)
  try {
    await transporter.verify();
  } catch (e) {
    return res.status(500).json({ error: `SMTP verify failed: ${e.message}` });
  }

  // Emails
  const userMail = {
    from: process.env.MAIL_FROM,
    to: email,
    subject: 'We received your request',
    html: `<h1>Thank you for contacting us, ${fullName}!</h1>
           <p>We’ll contact you shortly regarding your goal of ${goal}.</p>
           <p>Code: ${countryCode}</p>`,
  };

  const adminMail = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: `New Lead: ${fullName} - ${goal}`,
    html: `
      <h2>New Submission</h2>
      <p>Name: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Code: ${countryCode}</p>
      <p>Phone: ${phone}</p>
      <p>Goal: ${goal}</p>
      <p>German Level: ${germanLevel}</p>
      <p>Start Date: ${startDate}</p>
      <p>Learning Needs: ${learningNeeds}</p>
      <p>Consent: ${consent}</p>
      <p>Expert Guidance: ${expertGuidance}</p>
    `,
  };

  // Payload for Sheets
  const sheetPayload = {
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
    submittedAt: new Date().toISOString(),
  };

  try {
    // 1) Store in Google Sheets first
    await storeInGoogleSheet(sheetPayload);

    // 2) Send emails
    await Promise.all([
      transporter.sendMail(userMail),
      transporter.sendMail(adminMail),
    ]);

    return res
      .status(200)
      .json({ message: 'Emails sent and data stored successfully' });
  } catch (error) {
    // Always respond
    return res.status(500).json({ error: error.message || 'Unknown error' });
  }
}
