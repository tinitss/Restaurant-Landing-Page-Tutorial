import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Digitaliza y optimiza la gestión de tu negocio sin complicaciones.
          </h1>
          <p className="primary-text">
          Transforma tu negocio con Felysoft: gestiona inventarios, ingresos, servicios y reservas de libros de manera eficiente y sin complicaciones. ¡Empieza hoy mismo!
          </p>
          <button className="secondary-button">
            Empezar <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
