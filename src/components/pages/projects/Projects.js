import React from "react";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/profileImg.jpg";
import Footer from "../../footer/Footer";
import "./projects.css";
import "./projects_mediaQuery.css";

const Projects = () => {
  return (
    <div className="project__page__content">
      <div className="project__page__header">
        <div className="project__header__title">
          <h1 className="text-overflow">Projects I Have Made</h1>
        </div>
        <div className="project__header__summary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            totam ut corrupti eligendi repellat incidunt, dolorum illum.
            Provident, sint nostrum aut consequatur quis eveniet rem voluptates
            expedita corporis cumque est!
          </p>
        </div>
      </div>
      <div className="project__details__container">
        <div className="projects">
          <div className="project">
            <div className="project__icon">
              <img src={Img} alt="project" />
            </div>
            <div className="project__detail">
              <div>
                <h2>Lorem ipsum dolor sit.</h2>
                <div className="project__technologies">
                  <h3>PHP</h3>
                  <h3>MySQL</h3>
                  <h3>HTML</h3>
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="project__view">
                <Link target="_blank" to="!#">
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
