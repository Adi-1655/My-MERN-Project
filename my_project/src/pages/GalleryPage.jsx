// src/pages/GalleryPage.jsx
import React from "react";
import "./gallerypage.css";

const GalleryPage = () => {
  return (
    <section id="gallery" className="gallery-page">
      <h2>Our Work Gallery</h2>
      <div className="gallery-grid">
        <img src="/images/img1.jpg" alt="Interior 1" />
        <img src="/images/img2.jpg" alt="Interior 2" />
        <img src="/images/img3.jpg" alt="Interior 3" />
        <img src="/images/img4.jpg" alt="Interior 4" />
        <img src="/images/img5.jpg" alt="Interior 5" />
        <img src="/images/img6.jpg" alt="Interior 6" />
        <img src="/images/img7.jpg" alt="Interior 7" />
        <img src="/images/office_table.jpg" alt="Interior 8" />
        <img src="/images/products_dinning.jpg" alt="Interior 9" />
        <img src="/images/products_living.jpg" alt="Interior 10" />
        <img src="/images/sliding_door.jpg" alt="Interior 11" />
        <img src="/images/hall.jpg" alt="Interior 12" />
        <img src="/images/bed_ac.jpg" alt="Interior 13" />
        <img src="/images/minikitchen.jpg" alt="Interior 14" />
        <img src="/images/bedroom.jpg" alt="Interior 15" />
      </div>
    </section>
  );
};

export default GalleryPage;
