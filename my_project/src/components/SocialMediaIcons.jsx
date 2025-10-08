import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialMediaIcons = () => {
  const iconStyle = "text-3xl hover:text-black-500 transition-all duration-300";

  return (
    <div className="flex gap-6 justify-center mt-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className={iconStyle} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id="insta">
        <FaInstagram className={iconStyle} />
      </a>
      <a href="https://youtube.com"  id="youtube">
        <FaYoutube className={iconStyle} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;