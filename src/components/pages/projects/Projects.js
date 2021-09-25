import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import "./projects.css";
import "./projects_mediaQuery.css";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div className="project__page__content">
      <div className="project__page__header">
        <div className="project__header__title">
          <h1 className="text-overflow">{projectsData.pagedetail.heading}</h1>
        </div>
        <div className="project__header__summary">
          <p>{projectsData.pagedetail.summary}</p>
        </div>
      </div>
      <div className="project__details__container">
        <div className="projects">
          {projectsData.projects.map((items) => (
            <div key={items.id} className="project">
              <div className="project__icon">
                <img src={items.img} alt="project" />
              </div>
              <div className="project__detail">
                <div>
                  <h2>{items.title}</h2>
                  <div className="project__technologies">
                    {items.technologies.map((item) => (
                      <h3>{item}</h3>
                    ))}
                  </div>
                </div>
                <div className="project__view">
                  <Link target="_blank" to={{ pathname: items.link }}>
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
