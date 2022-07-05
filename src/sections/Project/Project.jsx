import React from "react";
import { BiSend } from "react-icons/bi";
import { ProjectContainer } from "./projectStyles";

const Project = () => {
  return (
    <ProjectContainer className="section project" id="project">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me and get a 30% discount
            </p>
            <a href="#contact" className="btn btn--flex btn--white">
              Contact me
              <BiSend className="btn__icon" />
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="Send Project"
            className="project__img"
          />
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Project;
