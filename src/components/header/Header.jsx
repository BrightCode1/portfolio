import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bright Isaac</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={Me} alt="Bright Isaac" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
