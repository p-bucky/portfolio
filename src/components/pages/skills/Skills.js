import React from "react";
import Img from "../../../assets/images/profileImg.jpg";
import "./skills.css";
import "./skills_mediaQuery.css";
import Footer from "../../footer/Footer";

const Skills = () => {
  return (
    <div className="skill__page__content">
      <div className="skill__page__header">
        <div className="skill__header__title">
          <h1 className="text-overflow">Skills I Have</h1>
        </div>
        <div className="skill__header__summary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            totam ut corrupti eligendi repellat incidunt, dolorum illum.
            Provident, sint nostrum aut consequatur quis eveniet rem voluptates
            expedita corporis cumque est!
          </p>
        </div>
      </div>
      <div className="skill__details__container">
        <div className="skills__details__section">
          <div className="skills__learning">
            <div className="skill">
              <img src={Img} alt="skill" />
              <div className="skill__desc">
                <h2>Learing</h2>
                <p>from past 3 Months</p>
              </div>
            </div>
          </div>
          <div className="skills__learning__onPause">
            <div className="skill">
              <img src={Img} alt="skill" />
              <div className="skill__desc">
                <h2>Learing</h2>
                <p>from past 3 Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
