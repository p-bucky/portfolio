import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import educationData from "./educationData";
import "./education.css";
import "./education_mediaQuery.css";

const Educations = () => {
  console.log(educationData.education.map((item) => item.link));
  return (
    <div className="education__page__content">
      <div className="education__page__header">
        <div className="education__header__title">
          <h1 className="text-overflow">{educationData.pagedetail.heading}</h1>
        </div>
        <div className="education__header__summary">
          <p>{educationData.pagedetail.summary}</p>
        </div>
      </div>
      <div className="education__details__container">
        <div className="education__detail__section">
          <h2 className="education__detail__section__title text-overflow">
            Education
          </h2>
          <div className="education__list overflow">
            {educationData.education.map((item) => (
              <div key={item.id} className="education">
                <h2 className="education__title text-overflow">{item.title}</h2>
                <div className="education__details">
                  <h2 className="education__detail text-overflow">
                    {item.detail}
                  </h2>
                  <Link
                    className="education__result text-overflow"
                    to={{ pathname: item.link }}
                    target="_blank"
                  >
                    {item.marks}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        ;
        <div className="education__detail__section">
          <h2 className="education__detail__section__title text-overflow">
            Certificates
          </h2>
          <div className="education__list overflow">
            {educationData.certificates.map((item) => (
              <div key={item.id} className="education">
                <h2 className="education__title text-overflow">{item.title}</h2>
                <div className="education__details">
                  <h2 className="education__detail text-overflow">
                    {item.detail}
                  </h2>
                  <Link
                    className="education__result text-overflow"
                    to={{ pathname: item.link }}
                    target="_blank"
                  >
                    View Certificate
                  </Link>
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

export default Educations;
