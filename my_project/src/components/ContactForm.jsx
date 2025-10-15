// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To display success or error messages

  // Update state when user types in an input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser refresh
    setStatus('Sending...');

    try {
      // The fetch request that sends data to your backend
      const response = await fetch('https://my-mern-project-2.onrender.com/contact', { // 👈 Make sure this URL is correct!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Tell the server we're sending JSON
        },
        body: JSON.stringify(formData), // Convert the form data object to a JSON string
      });

      if (response.ok) {
        setStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setStatus('Failed to send. Please check your connection.');
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
