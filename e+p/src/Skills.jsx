import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import reactIcon from "./assets/react.svg";
import es6Icon from "./assets/es6.svg";
import sassIcon from "./assets/sass.svg";
import apiIcon from "./assets/api.svg";
import webpackIcon from "./assets/webpack.svg";
import parcelIcon from "./assets/parcel.svg";
import tailwindIcon from "./assets/tailwindcss.svg";

import "./styles/main.scss";

const Skills = () => {
  return (
    
    <section className="skills" id="skills">
        <div className="container-skills">
      <h2 className="title">Dovednosti</h2>
      <div className="skills-box">
        <div className="icon-box">
          <img src={reactIcon} alt="react-icon" />
          <h3>React</h3>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faJs} />
          <h3>JavaScript</h3>
        </div>
        <div className="icon-box">
          <img src={es6Icon} alt="es6-icon" />
          <h3>ES6</h3>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faHtml5} />
          <h3>HTML5</h3>
        </div>
        <div className="icon-box">
          <FontAwesomeIcon icon={faCss3Alt} />
          <h3>CSS</h3>
        </div>
        <div className="icon-box">
          <img src={sassIcon} alt="sass-icon" />
          <h3>SASS</h3>
        </div>
        <div className="icon-box">
          <img src={apiIcon} alt="api-icon" className="api-icon"/>
          <h3>API</h3>
        </div>
        <div className="icon-box">
          <img src="/vite.svg" alt="vite-icon" />
          <h3>Vite</h3>
        </div>
        <div className="icon-box">
          <img src={webpackIcon} alt="webpack-icon" />
          <h3>Webpack</h3>
        </div>
        <div className="icon-box">
          <img src={parcelIcon} alt="parcel-icon" />
          <h3>Parcel</h3>
        </div>
        <div className="icon-box">
          <img src={tailwindIcon} alt="tailwind-icon" />
          <h3>Tailwind</h3>
        </div>
      </div>
      </div>
    </section>
   
  );
};

export default Skills;
