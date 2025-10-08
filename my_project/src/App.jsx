// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import MaterialsPage from "./pages/MaterialsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialMediaIcons from "./components/SocialMediaIcons";
import "@fortawesome/fontawesome-free/css/all.min.css"; // ✅ ensure this line is here

function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <div style={{ marginTop: "40px" }}>
        <SocialMediaIcons />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
