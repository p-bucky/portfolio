import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import "./contacts.css";
import "./contacts_mediaQuery.css";

const Contacts = () => {
  return (
    <div class="contact__page__content">
      <div class="contact__page__header">
        <div class="contact__header__title">
          <h1 class="text-overflow">Contact Me</h1>
        </div>
        <div class="contact__header__summary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            totam ut corrupti eligendi repellat incidunt, dolorum illum.
            Provident, sint nostrum aut consequatur quis eveniet rem voluptates
            expedita corporis cumque est!
          </p>
        </div>
      </div>
      <div class="contact__details__container">
        <div class="contacts">
          <div class="contact__social">
            <Link target="_blank" to="#">
              <i class="fab fa-linkedin"></i>
            </Link>
            <Link target="_blank" to="#">
              <i class="fab fa-twitter-square"></i>
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
