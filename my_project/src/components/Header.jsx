import React from "react";
import { Link } from "react-router-dom"; // 👈 1. Import Link
import "./header.css";

const Header = () => {
  return (
    <div className="top-bar">
      <div id="logo"></div>
      <div className="free-estimate">
        {/* 👇 2. Change <a> to <Link> and href to to */}
        <Link to="/contact" className="open-btn">
          Free consultation
        </Link>
      </div>
    </div>
  );
};

export default Header;
