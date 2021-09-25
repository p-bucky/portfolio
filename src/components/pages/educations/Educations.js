import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import "./education.css";
import "./education_mediaQuery.css";

const Educations = () => {
  return (
    <div class="education__page__content">
      <div class="education__page__header">
        <div class="education__header__title">
          <h1 class="text-overflow">Education I Have Pursued</h1>
        </div>
        <div class="education__header__summary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            totam ut corrupti eligendi repellat incidunt, dolorum illum.
            Provident, sint nostrum aut consequatur quis eveniet rem voluptates
            expedita corporis cumque est!
          </p>
        </div>
      </div>
      <div class="education__details__container">
        <div class="education__detail__section">
          <h2 class="education__detail__section__title text-overflow">
            Education
          </h2>
          <div class="education__list overflow">
            <div class="education">
              <h2 class="education__title text-overflow">
                High School (Class 10th)
              </h2>
              <div class="education__details">
                <h2 class="education__detail text-overflow">
                  Maths, Science, Social Science, English, Hindi, It
                </h2>
                <Link class="education__result text-overflow" to="#">
                  71 Percentage
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="education__detail__section">
          <h2 class="education__detail__section__title text-overflow">
            Certificates
          </h2>
          <div class="education__list overflow">
            <div class="education">
              <h2 class="education__title text-overflow">
                React & TypeScript Chrome Extension Development [2021]
              </h2>
              <div class="education__details">
                <h2 class="education__detail text-overflow">
                  React, Redux, Hooks{" "}
                </h2>
                <Link class="education__result text-overflow" to="#">
                  View Certificate
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

export default Educations;
