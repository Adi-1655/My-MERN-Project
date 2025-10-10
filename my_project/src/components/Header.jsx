// src/components/Header.jsx
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div class="top-bar">
    <div id="logo">
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
