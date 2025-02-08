import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/main.scss";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    {/*pro hladke srolovani na odkazy */}
    const handleLinkClick = (e, href) => {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = -85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    };
  
    return (
      <nav className="navbar">
        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="mobile-header">
            <div className="logo">🚀 Ester's Space</div>
            <button className="menu-toggle" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
  
          {isMobileMenuOpen && (
            <ul className="menu-list">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "#home")}>
                  Home planet
                </a>
              </li>
              <li>
                <a href="#bio" onClick={(e) => handleLinkClick(e, "#bio")}>
                  BIO
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => handleLinkClick(e, "#skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
                  Space Trips
                </a>
              </li>
            </ul>
          )}
        </div>
  
        {/* Desktop Menu */}
        <div className="desktop-menu">
          <div className="logo">🚀 Ester's Space</div>
          <ul className="menu-list">
            <li>
              <a href="#home"  onClick={(e) => handleLinkClick(e, "#home")}>
                Home planet
              </a>
            </li>
            <li>
              <a href="#bio"  onClick={(e) => handleLinkClick(e, "#bio")}>
                BIO
              </a>
            </li>
            <li>
              <a href="#skills"  onClick={(e) => handleLinkClick(e, "#skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects"  onClick={(e) => handleLinkClick(e, "#projects")}>
                Space Trips
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ester-andrews-97080716b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5a2c91]">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/ester-a" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5a2c91]">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

