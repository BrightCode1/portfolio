import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { TbBriefcase } from "react-icons/tb";
import { BiCalendar } from "react-icons/bi";

import { QualificationContainer } from "./quaStyles";

const Qualification = () => {
  const [tabSet, setTabSet] = useState(0);
  return (
    <QualificationContainer
      className="qualification section"
      id="qualification"
    >
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My journeys</span>

      <div className="qua__container container">
        <div className="qua__tabs">
          <div
            className={`qua__btn btn--flex ${tabSet === 0 && "active"} `}
            onClick={() => setTabSet(0)}
          >
            <TbBriefcase className="qua__icon" /> Experience
          </div>
          <div
            className={`qua__btn btn--flex ${tabSet === 1 && "active"} `}
            onClick={() => setTabSet(1)}
          >
            <FaGraduationCap className="qua__icon" /> Education
          </div>
        </div>
        <div className="qua__sections">
          <div className={`qua__content ${tabSet === 1 && "qua__active"} `}>
            <div className="qua__data">
              <div>
                <h3 className="qua__title">Computer Science</h3>
                <span className="qua__subtitle">
                  Abubakar Tafewa Belewa University - Bauchi
                </span>
                <div className="qua__calendar">
                  <BiCalendar className="qua__calendar-icon" /> 2017
                </div>
              </div>
              <div>
                <span className="qua__rounder"></span>
                <span className="qua__linear"></span>
              </div>
            </div>
          </div>
          <div className={`qua__content ${tabSet === 0 && "qua__active"} `}>
            {/* ql ex 1 */}
            <div className="qua__data">
              <div>
                <h3 className="qua__title">Mobile App Developer</h3>
                <span className="qua__subtitle">FoodNow - Ikeja Lagos</span>
                <div className="qua__calendar">
                  <BiCalendar className="qua__calendar-icon" /> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="qua__rounder"></span>
                <span className="qua__linear"></span>
              </div>
            </div>
            {/* ql ex 2 */}
            <div className="qua__data">
              <div></div>
              <div>
                <span className="qua__rounder"></span>
                <span className="qua__linear"></span>
              </div>
              <div>
                <h3 className="qua__title">Full Stack Developer</h3>
                <span className="qua__subtitle">Quelib - Port Harcourt</span>
                <div className="qua__calendar">
                  <BiCalendar className="qua__calendar-icon" /> 2021 - 2022
                </div>
              </div>
            </div>
            {/* ql ex 3 */}
            <div className="qua__data">
              <div>
                <h3 className="qua__title">Full Stack Developer</h3>
                <span className="qua__subtitle">Ohms - Port Harcourt</span>
                <div className="qua__calendar">
                  <BiCalendar className="qua__calendar-icon" /> 2020 - 2021
                </div>
              </div>
              <div>
                <span className="qua__rounder"></span>
                <span className="qua__linear"></span>
              </div>
            </div>
            {/* ql ex 4 */}
            <div className="qua__data">
              <div></div>
              <div>
                <span className="qua__rounder"></span>
              </div>
              <div>
                <h3 className="qua__title">Full Stack Developer</h3>
                <span className="qua__subtitle">Albaama - Port Harcourt</span>
                <div className="qua__calendar">
                  <BiCalendar className="qua__calendar-icon" /> 2019 - 2020
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QualificationContainer>
  );
};

export default Qualification;
