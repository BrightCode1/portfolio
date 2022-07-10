import React from "react";
import { IoMdDownload } from "react-icons/io";

import { AboutContainer } from "./aboutStyles";
import AboutImage from "../../assets/img/about.png";
import Resume from "../../assets/cv/resume.pdf";

const About = () => {
  return (
    <AboutContainer className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImage} alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Hello, My name is{" "}
            <span
              className="about__name"
              style={{ color: "var(--first-color)" }}
            >
              Isaac Kelechi
            </span>
            , a self taught full stack developer. I've been building stuff on
            the web and mobile from 2017 and been able to create accessible,
            inclusive products and digital experiences for friends, startups and
            clients. Through my coding journey i have been able to use alot of
            technologies that i find interesting and can use to build cool stuff
            for you.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-subtitle">
                Years <br /> Experience
              </span>
            </div>
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-subtitle">
                Completed <br /> Projects
              </span>
            </div>
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-subtitle">
                Companies <br /> Worked
              </span>
            </div>
          </div>
          <div className="about__btns">
            <a href={Resume} className="btn btn--flex" download>
              Download CV
              <IoMdDownload className="btn__icon" />
            </a>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
