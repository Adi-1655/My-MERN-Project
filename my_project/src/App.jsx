// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Your Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import MaterialsPage from "./pages/MaterialsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

// Import Your Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialMediaIcons from "./components/SocialMediaIcons";

function App() {
  return (
    <Router>
      {/* These components will show on every page */}
      <Header />
      <Navbar />

      {/* This section will switch between your pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* These components will also show on every page */}
      <div style={{ marginTop: "40px" }}>
        <SocialMediaIcons />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
