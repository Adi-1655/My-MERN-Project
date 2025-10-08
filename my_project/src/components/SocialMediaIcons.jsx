// src/components/SocialMediaIcons.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./socialmediaicons.css";

const SocialMediaIcons = ({ links = [] }) => {
  return (
    <div className="social-icons">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          <i className={link.iconClass} id={link.id}></i>
        </a>
      ))}
    </div>
  );
};

SocialMediaIcons.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
};

SocialMediaIcons.defaultProps = {
  links: [
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      iconClass: "fa-brands fa-instagram",
      id: "insta",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com",
      iconClass: "fa-brands fa-youtube",
      id: "yt",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com",
      iconClass: "fa-brands fa-facebook",
      id: "facebook",
    },
  ],
};

export default SocialMediaIcons;
