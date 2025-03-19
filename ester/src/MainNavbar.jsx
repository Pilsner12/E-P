import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import etneteraIcon from "./assets/etnetera-core.svg";


import "./styles/main.scss";


const MainNavbar = () => {
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
              <img src={etneteraIcon} alt="etnetera-logo" className="w-48 h-auto" />
              <button className="menu-toggle" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
              </button>
            </div>
    
            {isMobileMenuOpen && (
              <ul className="menu-list">
                <li id="nav_link">
                  <a href="#header" onClick={(e) => handleLinkClick(e, "#header")}>
                    Úvod
                  </a>
                </li>
                <li id="nav_link">
                  <a href="#main" onClick={(e) => handleLinkClick(e, "#main")}>
                    Profily
                  </a>
                </li>
                <li id="nav_link">
                  <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
                  Kontakt
                  </a>
                </li>
                <li id="nav_link">
                  <a href="https://github.com/Pilsner12/E-P/tree/main" target="_blank">
                  Zdrojový kód
                  </a>
                </li>
              </ul>
            )}
          </div>
    
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <img src={etneteraIcon} alt="etnetera-logo" className="w-48 h-auto" />
            <ul className="menu-list">
              <li id="nav_link">
                <a href="#header" onClick={(e) => handleLinkClick(e, "#header")} >
                Úvod
                </a>
              </li>
              <li id="nav_link">
                <a href="#main" onClick={(e) => handleLinkClick(e, "#main")}>
                Profily
                </a>
              </li>
              <li id="nav_link">
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>
                Kontakt
                </a>
              </li>
              <li id="nav_link">
                  <a href="https://github.com/Pilsner12/E-P/tree/main" target="_blank">
                  Zdrojový kód
                  </a>
                </li>
            </ul>
          </div>
        </nav>
      );
    };


export default MainNavbar