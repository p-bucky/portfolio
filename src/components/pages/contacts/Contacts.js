import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import "./contacts.css";
import "./contacts_mediaQuery.css";
import contactData from "./contactData";

const Contacts = () => {
  return (
    <div class="contact__page__content">
      <div class="contact__page__header">
        <div class="contact__header__title">
          <h1 class="text-overflow">{contactData.pagedetail.heading}</h1>
        </div>
        <div class="contact__header__summary">
          <p>{contactData.pagedetail.summary}</p>
        </div>
      </div>
      <div class="contact__details__container">
        <div class="contacts">
          <div class="contact__social">
            <Link to={{ pathname: contactData.linkedIn }} target="_blank">
              <i class="fab fa-linkedin"></i>
            </Link>
            <Link to={{ pathname: contactData.twitter }} target="_blank">
              <i class="fab fa-twitter-square"></i>
            </Link>
            <Link to={{ pathname: contactData.github }} target="_blank">
              <i class="fab fa-github-square"></i>
            </Link>
          </div>
          <div class="contact__email">
            <i class="fas fa-envelope-open-text"></i>
            <h3>prashantjha9989@gmail.com</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
