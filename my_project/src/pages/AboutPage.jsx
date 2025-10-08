// src/pages/AboutPage.jsx
import React from "react";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <div id="content">
      <h1>About Us</h1>
      <br />

      <div className="info" id="first">
        <h4>
          &#9658; At Shivam Home Interior, we believe great design is not just
          about looking good—it’s about how a space makes you feel and how it
          supports your daily life...
        </h4>
      </div>

      <div className="info" id="second">
        <h4>
          &#9658; Our journey started with a clear mission: to turn simple
          spaces into beautiful, functional places that bring happiness and
          comfort...
        </h4>
      </div>

      <div className="info" id="third">
        <h4>
          &#9658; Whether it’s a small home makeover, a luxury house, or a
          commercial office, we bring the same level of passion and perfection
          to every project...
        </h4>
      </div>

      {/* 🔹 Info Box */}
      <div id="info-box">
        <h2 style={{ textAlign: "center" }}>SHIVAM HOME INTERIOR</h2>
        <br />
        <ul>
          <li><strong>History:</strong> Founded in 2000, started providing kitchen module designs and interior designs.</li>
          <li><strong>Team / Leadership:</strong> Founder of the company leads the overall work.</li>
          <li><strong>Office Location:</strong> Uran Islampur, Vita</li>
          <li><strong>Manufacturing plant:</strong> Plot no E3 in front of Government ITI, Islampur MIDC</li>
          <li><strong>Email ID:</strong> stktik1@gmail.com</li>
        </ul>
      </div>

      {/* 🔹 Special Section */}
      <div className="info" id="special">
        <h3>&#9658; What makes Shivam Home Interior special?</h3>
        <ul>
          <li><b>Designs made just for you:</b> We start by listening to your ideas...</li>
          <li><b>Complete services from start to finish:</b> We handle everything...</li>
          <li><b>Smart and eco-friendly designs:</b> We use the latest trends...</li>
          <li><b>High-quality work:</b> We work with the best craftsmen...</li>
          <li><b>On time and within your budget:</b> We respect your time and money...</li>
        </ul>
      </div>

      {/* 🔹 Promise Section */}
      <div className="info" id="promise">
        <h3>&#9658; Our Promises</h3>
        <h4>
          We promise to create beautiful spaces that are truly yours—spaces
          that feel warm, welcoming, and well-designed...
        </h4>
      </div>
    </div>
  );
};

export default AboutPage;
