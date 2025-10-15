// src/services/api.js

const API_URL = 'https://mern-project-o478.onrender.com';

// Send contact form data to backend
export async function submitContactForm(formData) {
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: error.message };
  }
}