import React from "react";
import "./skills.css";
import "./skills_mediaQuery.css";
import Footer from "../../footer/Footer";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <div className="skill__page__content">
      <div className="skill__page__header">
        <div className="skill__header__title">
          <h1 className="text-overflow">{skillsData.pagedetail.heading}</h1>
        </div>
        <div className="skill__header__summary">
          <p>{skillsData.pagedetail.summary}</p>
        </div>
      </div>
      <div className="skill__details__container">
        <div className="skills__details__section">
          <div className="skills__learning">
            {skillsData.learning.map((items) => (
              <div key={items.id} className="skill">
                <img src={items.img} alt="skill" />
                <div className="skill__desc">
                  <h2>Learing</h2>
                  <p>{items.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="skills__learning__onPause">
            {skillsData.onPause.map((items) => (
              <div className="skill">
                <img Key={items.id} src={items.img} alt="skill" />
                <div className="skill__desc">
                  <h2>On Pause</h2>
                  <p>{items.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
