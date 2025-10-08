// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero"></div>

       {/* why choose */}
  <section class="why-choose">
  <h2>Why Choose Shivam Home Interior?</h2>
  <div class="stats">
    <div class="stat-box">
      <h3>2000+</h3>
      <p>Delivered Homes</p>
    </div>
    <div class="stat-box">
      <h3>25+</h3>
      <p>Expert Designers</p>
    </div>
    <div class="stat-box">
      <h3>100+</h3>
      <p>Skilled Workers</p>
    </div>
    <div class="stat-box">
      <h3>4.8+</h3>
      <p>Customer Satisfaction</p>
    </div>
  </div>
</section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2>Project Gallery</h2>
          <div className="grid">
            <img src="../images/kitchen_project.jpg" alt="Interior Project" />
            <img src="../images/office_table.jpg" alt="Interior Project" />
            <img src="../images/sliding_door.jpg" alt="Interior Project" />
            <img src="../images/bed_ac.jpg" alt="Interior Project" />
          </div>
          <Link className="load-more" to="/gallery">Explore</Link>
        </div>
      </section>
      <br />

      {/* <!-- how it works --> */}

  <section class="how-it-works">
  <h2>How it works</h2>
  <div class="steps">
    <div id="steps_line"></div>
    <div class="step">
      <div class="icon">👥</div>
      <p>Consultation</p>
    </div>
    
    <div class="step">
      <div class="icon">📐</div>
      <p>Site visit & measurements</p>
    </div>
   
    <div class="step">
      <div class="icon">🛋️</div>
      <p>Detailed design according to requirement</p>
    </div>
    
    <div class="step">
      <div class="icon">🚀</div>
      <p>Execution Begins</p>
    </div>
    
    <div class="step">
      <div class="icon">🛠️</div>
      <p>Final Installations</p>
    </div>
    
    <div class="step">
      <div class="icon">🏡</div>
      <p>Move in & Enjoy!</p>
    </div>
  </div>
</section><br/>

  {/* <!-- row material brands --> */}
  <section class="brands-section">
    <h2>Our Material Brands</h2>
    <div class="brands-row">
      <div class="brand"><img src="../images/Hettich.jpeg" alt="Hettich"/></div>
      <div class="brand"><img src="../images/Blum.jpeg" alt="Blum"/></div>
      <div class="brand"><img src="../images/Ebco.jpeg" alt="ebco"/></div>
      <div class="brand"><img src="../images/Jindal_Steel.jpeg" alt="jindal_steel"/></div>
    </div>
  </section>

      {/* Contact Section */}
      <section id="contact">
        <h3>Contact</h3>
        <ul>
          <li><strong>📞 Phone :</strong> 8459487001 , 9822270995</li>
          <li>
            <strong>
              Whatsapp :
            </strong> 8459487001 , 9822270995
          </li>
          <li><strong>✉ Email :</strong> stktik1@gmail.com</li>
        </ul>

        <h3 id="location">Location</h3>
        <ul>
          <li><strong>📍 Address 1 :</strong> In front of MSEB, Karad Road, Vita - 415311</li>
          <li><strong>📍 Address 2 :</strong> Plot no E3, In front of Government ITI college, MIDC Islampur - 415415</li>
        </ul>
      </section>
    </>
  );
};

export default HomePage;
