import React, { useState } from "react";
import "./contactform.css";
import { submitContactForm } from "../services/api.js"; // 👈 import the helper

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const result = await submitContactForm(formData);

    if (result.success) {
      alert("Submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div
      className="contact-form-wrapper"
      style={{ backgroundImage: "url(/images/form_bg.jpg)" }}
    >
      <div className="contact-form-container">
        <h2 className="contact-form-title">Get Free Consultation</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="6"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;