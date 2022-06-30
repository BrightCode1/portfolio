import React, { useState } from "react";
import { RiHome5Line } from "react-icons/ri";
import { GrUser } from "react-icons/gr";
import { FiFileText, FiImage } from "react-icons/fi";
import { TbBriefcase } from "react-icons/tb";
import { BiSend } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

import { NavbarContainer } from "./componentStyles";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };
  return (
    <NavbarContainer>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          KCIBDEV
        </a>

        <div className={`nav__menu ${navToggle && "show-menu"}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link"
                onClick={() => setNavToggle(false)}
              >
                <RiHome5Line className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={() => setNavToggle(false)}
              >
                <GrUser className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={() => setNavToggle(false)}
              >
                <FiFileText className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className="nav__link"
                onClick={() => setNavToggle(false)}
              >
                <TbBriefcase className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className="nav__link"
                onClick={() => setNavToggle(false)}
              >
                <FiImage className="nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={() => setNavToggle(false)}
              >
                <BiSend className="nav__icon" /> Contact
              </a>
            </li>
          </ul>
          <FaTimes className="nav__close" onClick={toggleNav} id="nav-close" />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" onClick={toggleNav} id="nav-toggle">
            <HiMenuAlt3 />
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
