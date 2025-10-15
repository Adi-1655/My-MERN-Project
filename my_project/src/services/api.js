// src/services/api.js
const API_URL = 'https://my-mern-project-2.onrender.com'; // Or whatever your backend port is

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // If the server responds with an error status (4xx, 5xx)
      console.error("Server responded with an error:", response.status);
      return { success: false };
    }

    const data = await response.json();
    return { success: true, data };

  } catch (error) {
    // This catches network errors like "Failed to fetch"
    console.error("Error submitting contact form:", error);
    return { success: false };
  }
};
