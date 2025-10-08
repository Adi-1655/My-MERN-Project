// routes/Contact.js
const express = require("express");
const Contact = require("../models/Contact"); // no .js needed
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // ✅ Email validation before saving/sending
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Save to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // ✅ always send from your account
      replyTo: email, // ✅ user's email goes here
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
