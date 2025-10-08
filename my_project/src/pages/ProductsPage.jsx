// src/pages/ProductsPage.jsx
import React from "react";
import "./productspage.css";

const ProductsPage = () => {
  return (
    <section className="products">
      <h2>Our Product Categories</h2>
      <div className="grid">

        <div className="product-card">
          <a href="/products/kitchen">
            <img src="/images/products_kitchen.jpg" alt="Kitchen Interiors" />
          </a>
          <h3>Kitchen</h3>
          <p>Modern and modular kitchen designs that blend style with utility.</p>
        </div>

        <div className="product-card">
          <a href="/products/bedroom">
            <img src="/images/products_bedroom.jpg" alt="Bedroom Interiors" />
          </a>
          <h3>Bedroom</h3>
          <p>Comfortable, elegant, and cozy bedroom setups for your dream space.</p>
        </div>

        <div className="product-card">
          <a href="/products/dining">
            <img src="/images/products_dinning.jpg" alt="Dining Room Interiors" />
          </a>
          <h3>Dining Room</h3>
          <p>Beautiful dining areas designed for family moments and gatherings.</p>
        </div>

        <div className="product-card">
          <a href="/products/living">
            <img src="/images/products_living.jpg" alt="Living Room Interiors" />
          </a>
          <h3>Living Room</h3>
          <p>Stylish living rooms with functional layouts and luxury finishes.</p>
        </div>

        <div className="product-card">
          <a href="/products/decor">
            <img src="/images/products_decorative_units.jpg" alt="Decorative Units" />
          </a>
          <h3>Decorative Units</h3>
          <p>Custom-made decorative units to enhance the look of your home.</p>
        </div>

        <div className="product-card">
          <a href="/products/kids">
            <img src="/images/products_kidsroom.jpg" alt="Kids Room Interiors" />
          </a>
          <h3>Kids Room</h3>
          <p>Fun, colorful, and safe interiors for your children’s happy space.</p>
        </div>

      </div>
    </section>
  );
};

export default ProductsPage;
