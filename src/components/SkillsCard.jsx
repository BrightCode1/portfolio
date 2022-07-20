import React, { useState } from "react";

import { FaAngleDown } from "react-icons/fa";

const SkillsCard = ({ skill }) => {
  const [openList, setOpenList] = useState(skill.id === 0 ? true : false);
  return (
    <div
      className={`skills__content ${
        !openList ? "skills__close" : "skills__open"
      }`}
    >
      <div className="skills__header" onClick={() => setOpenList(!openList)}>
        <skill.icon className="skills__icon" />

        <div>
          <h1 className="skills_title">{skill.title}</h1>
          <span className="skills__subtitle">{skill.subtitle}</span>
        </div>

        <FaAngleDown className="skills__arrow" />
      </div>

      <div className="skills__list">
        {skill.languages.map((language) => (
          <div className="skills__data" key={language.lowerCase}>
            <div className="skills__titles">
              <h3 className="skills__name">{language.name}</h3>
              {/* <span className="skills__num">{language.level}</span> */}
            </div>
            {/* <div className="skills__bar">
              <span
                style={{
                  width: `${language.number}%`,
                }}
                className={`skills__percentage skills__${language.lowerCase}`}
              ></span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
