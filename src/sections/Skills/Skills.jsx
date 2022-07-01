import React from "react";

import SkillsCard from "../../components/SkillsCard";

import { SkillsContainer } from "./skillStyles";
import { mySkills } from "../../skillsContent";

const Skills = () => {
  return (
    <SkillsContainer className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          {mySkills.map((skill) => (
            <SkillsCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;
