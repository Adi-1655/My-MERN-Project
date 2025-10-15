//component location - my_project/src/components/ContactForm.jsx
import React, { useState } from "react";
import "./contactform.css";

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

  // --- The handleSubmit function is the only part that has been changed ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      // Direct backend API call using fetch
      const response = await fetch('https://my-mern-project-2.onrender.com/contact', { // 👈 Make sure this URL is correct!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form on success
      } else {
        // Handle server-side errors (e.g., validation failure)
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Something went wrong. Try again later.'}`);
      }
    } catch (error) {
      // Handle network errors (e.g., server is down)
      console.error('Submission Error:', error);
      alert("Failed to connect to the server. Please try again later.");
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
