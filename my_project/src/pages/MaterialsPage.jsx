// src/pages/MaterialsPage.jsx
import React from "react";
import "./materialpage.css";
//import "./home.css";

const MaterialsPage = () => {
  return (
    <main className="container">
      <h2>Our Materials</h2>
      <p className="subtitle">
        Explore our premium plywood collection with strength, durability, and stylish finishes.
      </p>

      <div className="materials-grid">
        <div className="material-card">
          <img src="/images/ply1.jpg" alt="Gurjan Brown Laminated Plywood" />
          <h3>Gurjan Brown Laminated Plywood</h3>
        </div>

        <div className="material-card">
          <img src="/images/ply2.jpg" alt="CenturyPly Gurjan Plywood" />
          <h3>CenturyPly Gurjan Plywood</h3>
        </div>

        <div className="material-card">
          <img src="/images/merino_laminated.avif" alt="Merino Laminated Plywood" />
          <h3>Merino Laminated Plywood</h3>
        </div>

        <div className="material-card">
          <img src="/images/limewood_laminated.avif" alt="Limewood Laminated Plywood" />
          <h3>Limewood Laminated Plywood</h3>
        </div>
      </div>
    </main>
  );
};

export default MaterialsPage;
