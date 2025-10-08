const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "Name, email, and message are required." });
    }

    // Save to DB
    const contact = await Contact.create({ name, email, phone, message });

    // Send Email
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    await sendEmail({
      subject: "New Contact Form Submission",
      text: `New message from ${name} (${email}) - ${message}`,
      html: emailBody
    });

    res.status(201).json({ msg: "Form submitted successfully!", contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
