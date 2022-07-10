import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

import { FooterContainer } from "./componentStyles";

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">KCIBDEV</h1>
            <span className="footer__subtitle">Full Stack Developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://web.facebook.com/profile.php?id=100010277356142"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <ImFacebook />
            </a>
            <a
              href="https://twitter.com/kcibdev"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <ImTwitter />
            </a>
            <a
              href="https://www.youtube.com/brightcode"
              target="_blank"
              rel="noreferrer"
              className="footer__social"
            >
              <ImYoutube />
            </a>
          </div>
        </div>

        <p className="footer__copy">&copy; kcib. All right reserved</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
