import React, { useState } from "react";
import { RiHome5Line } from "react-icons/ri";
import { FiFileText, FiImage, FiUser } from "react-icons/fi";
import { TbBriefcase } from "react-icons/tb";
import { BiSend } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";

import { NavbarContainer } from "./componentStyles";

const Navbar = ({ currentSection, isCurrentSection }) => {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  const changeTheme = () => {
    //check if theme exist in local storage
    if (localStorage.getItem("theme")) {
      //if theme exist, remove it
      localStorage.removeItem("theme");
    } else {
      //add theme to local storage and change body theme
      localStorage.setItem("theme", "dark-theme");
    }
    document.body.classList.toggle("dark-theme");
  };
  return (
    <NavbarContainer className={`${isCurrentSection && "scroll-header"}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          KCIB<span>.DEV</span>
        </a>

        <div className={`nav__menu ${navToggle && "show-menu"}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  currentSection === "home" && "active-link"
                }`}
                onClick={() => setNavToggle(false)}
              >
                <RiHome5Line className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  currentSection === "about" && "active-link"
                }`}
                onClick={() => setNavToggle(false)}
              >
                <FiUser className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  currentSection === "skills" && "active-link"
                }`}
                onClick={() => setNavToggle(false)}
              >
                <FiFileText className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className={`nav__link ${
                  currentSection === "services" && "active-link"
                }`}
                onClick={() => setNavToggle(false)}
              >
                <TbBriefcase className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${
                  currentSection === "portfolio" && "active-link"
                }`}
                onClick={() => setNavToggle(false)}
              >
                <FiImage className="nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  currentSection === "contact" && "active-link"
                }`}
                onClick={() => setNavToggle(false)}
              >
                <BiSend className="nav__icon" /> Contact
              </a>
            </li>
          </ul>
          <FaTimes className="nav__close" onClick={toggleNav} id="nav-close" />
        </div>

        <div className="nav__btns">
          <WiMoonAltWaningGibbous6
            className="change-theme"
            onClick={changeTheme}
          />
          <div className="nav__toggle" onClick={toggleNav} id="nav-toggle">
            <HiMenuAlt3 />
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
