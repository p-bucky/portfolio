import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import "./sidebar_mediaQuery.css";
import Img from "../../assets/images/profileImg.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="sidebar__profile__header">
          <div className="sidebar__profile__img">
            <img src={Img} alt="prashant jha" />
          </div>
          <div className="sidebar__info">
            <div className="sidebar__profile__name">
              <h1>Prashant Jha</h1>
            </div>
            <div className="sidebar__info__buttons">
              <Link className="sidebar__info__button" to="/skills">
                Skills
              </Link>
              <Link className="sidebar__info__button" to="/projects">
                Projects
              </Link>
              <Link className="sidebar__info__button" to="/education">
                Education
              </Link>
              <Link className="sidebar__info__button" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="sidebar__profile__about">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            facere quidem, similique cum nemo ex tenetur soluta sunt ad
            consectetur, impedit eum deserunt laborum.
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottom__buttons">
          <div className="sidebar__bottom__resume__button">
            <Link className="sidebar__bottom__button" to="!#">
              Resume
            </Link>
          </div>
          <div className="sidebar__bottom__other__buttons">
            <Link className="sidebar__bottom__button" to="!#">
              Blogs
            </Link>
            <Link className="sidebar__bottom__button" to="!#">
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
