// src/components/Header.jsx
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="top-bar">
      <div id="name">
        <h1>SHIVAM HOME INTERIOR</h1>
      </div>
      <div className="free-estimate">
        <a href="/contact" className="open-btn">
          Free consultation
        </a>
      </div>
    </div>
  );
};

export default Header;
