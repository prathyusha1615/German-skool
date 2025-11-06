import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { fullName, email, phone, goal, germanLevel, startDate, learningNeeds, consent, countryCode } = req.body;

  // Set up the nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === '465', 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Send confirmation email to the user
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: email,
    subject: 'We received your request',
    html: `<h1>Thank you for contacting us, ${fullName}!</h1>
          <p>We’ll contact you shortly regarding your goal of ${goal}.</p>
          <p>Code: ${countryCode}</p>`
  };

  // Admin email with submission details
  const adminMailOptions = {
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
    `,
  };

  // Google Sheets API call (Apps Script URL)
  const googleSheetUrl = process.env.APPS_SCRIPT_URL; // Ensure this URL is stored in your environment variables
  const googleSheetPayload = {
    fullName,
    email,
    phone,
    goal,
    germanLevel,
    startDate,
    learningNeeds,
    consent,
    countryCode
  };

  // Function to store data in Google Sheets
  const storeInGoogleSheet = async () => {
    try {
      const response = await fetch(googleSheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googleSheetPayload),
      });
      const result = await response.json();
      if (result.status !== 'success') {
        throw new Error('Failed to store data in Google Sheets');
      }
    } catch (error) {
      console.error('Error storing data in Google Sheets:', error);
      throw new Error('Failed to store data in Google Sheets');
    }
  };

  try {
    // Store data in Google Sheets
    await storeInGoogleSheet();

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Emails sent and data stored successfully' });
  } catch (error) {
    console.error('Error:', error);
    
  }
}
