import React from "react";
import { BiSend } from "react-icons/bi";
import { ProjectContainer } from "./projectStyles";
import AboutImage from "../../assets/img/about.png";

const Project = () => {
  return (
    <ProjectContainer className="section project">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me and let's start building it real quick
            </p>
            <a href="#contact" className="btn btn--flex btn--white">
              Contact me
              <BiSend className="btn__icon" />
            </a>
          </div>
          <img src={AboutImage} alt="Send Project" className="project__img" />
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;
