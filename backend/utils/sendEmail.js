const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail", // use Gmail service
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // your app password
  },
});

const sendEmail = async ({ fromEmail, name, phone, message }) => {
  await transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`, // sent via your Gmail
    replyTo: fromEmail, // when owner replies, it goes to user’s email
    to: process.env.EMAIL_TO, // owner/organization email
    subject: "New Contact Form Submission",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${fromEmail}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};

module.exports = sendEmail;
