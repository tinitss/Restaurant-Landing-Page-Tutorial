import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
        Visión clara de tus finanzas: informes detallados para decisiones estratégicas.
        </h1>
        <p className="primary-text">
        Gestiona tus ingresos con datos financieros claros y accesibles: análisis profundos y reportes que facilitan la toma de decisiones.
        </p>
        <div className="about-buttons-container">
        <button className="secondary-button">
            Empezar <FiArrowRight />{" "}
          </button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
