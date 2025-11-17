const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'onlinefrenchskool@gmail.com', // your Gmail address
    pass: 'gwmitxeqosbzjjwx', // your Gmail app-specific password
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP connection successful:', success);
  }
});
