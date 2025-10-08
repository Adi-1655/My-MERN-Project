// src/components/Footer.jsx
import React from "react";
import "./footer.css"; // Reuse existing CSS (or create a separate footer.css if needed)

const Footer = () => {
  return (
    <footer className="footer-cta">
      <div className="container">
        <h3>STYLE WITH PERFECTION.</h3>
        <br />
        <p>© 2025 Shivam Interior & Kitchen. All Rights Reserved.</p>
      </div>
      <a href="https://developer-duo-cae97.web.app" target="_blank" rel="noopener noreferrer">
        @Developer Duo
      </a>
    </footer>
  );
};

export default Footer;
