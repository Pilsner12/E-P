import React from "react";
import "./styles/main.scss";
import cvImg from "./assets/cvImg.jpeg";
import dkDentImg from "./assets/dkDentImg.jpeg";

const Petr = () => {
  return (
    <>
      <h1 className="petr-title">Who is Petr?</h1>
      <div className="flex-container">
        <div className="flex-item">
          <a href="https://github.com/Pilsner12/dkdentalcare.git" target="_blank">
            <img className="project-img" src={dkDentImg} alt="DK Dental" />
          </a>
          <p>
            <a className="link" href="https://dkdentalcare.netlify.app/" target="_blank">
              DK Dental Care
            </a>
          </p>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            <img className="project-img" src={cvImg} alt="CV Petr" />
            <p>
              <a
                className="link"
                target="_blank"
                href="https://www.figma.com/design/f5J0e8h3maTpGaYNiQJrKq/PetrS-CV?node-id=0-1&p=f"
              >
                Petr CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Petr;
