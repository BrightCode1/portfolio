import React from "react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import { BiDownArrowAlt, BiSend } from "react-icons/bi";

import { HomeContainer } from "./homeStyles";
import MyImage from "../../img/myImage.png";

const Header = () => {
  return (
    <HomeContainer className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <FiTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <FiGithub />
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home__blob-img"
                  x="12"
                  y="-100"
                  href={MyImage}
                />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'm Kelechi</h1>
            <h2 className="home__subtitle">Full Stack Developer</h2>
            <p className="home__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              esse harum similique, et blanditiis omnmque facet!
            </p>
            <a href="#contact" className="btn btn--flex">
              Contact Me <BiSend className="btn__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-btn btn--flex">
            <BsMouse className="home__scroll-mouse" />
            <span className="home__scroll-text">Scroll Down</span>
            <BiDownArrowAlt className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Header;
