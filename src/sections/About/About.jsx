import React from "react";
import { AboutContainer } from "./aboutStyles";
import AboutImage from "../../img/about.png";

const About = () => {
  return (
    <AboutContainer className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImage} alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, a
            asperiores obcaecati sunt suscipit, cumque omnis et aliquid odio
            cupiditate deleniti dicta. Maiores necessitatibus magnam placeat
            soluta enim animi tempore?
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-subtitle">
                Years <br /> Experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-subtitle">
                Completed <br /> Projects
              </span>
            </div>
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-subtitle">
                Companies <br /> Worked
              </span>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
