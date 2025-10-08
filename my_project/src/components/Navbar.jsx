import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={menuOpen ? "navbar open" : "navbar"}>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <div>
          {/* ✅ Scrolls to top when clicking Home */}
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/products" onClick={handleLinkClick}>
            Products
          </Link>
        </div>

        <div>
          <Link
            to="/materials"
            id="material_popup"
            className="btn"
            onClick={handleLinkClick}
          >
            Material
          </Link>
        </div>

        <div>
          <Link to="/gallery" onClick={handleLinkClick}>
            Gallery
          </Link>
        </div>

        <div className="dropdown">
          <HashLink smooth to="/#location" onClick={handleLinkClick}>
            Locations
          </HashLink>
        </div>

        <div>
          <Link to="/about" onClick={handleLinkClick}>
            About Us
          </Link>
        </div>

        <div className="dropdown">
          <HashLink smooth to="/#contact" onClick={handleLinkClick}>
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
