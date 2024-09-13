import React from "react";
import BannerBackground from "../Assets/Fondos/Fondo1.png";
import BannerImage from "../Assets/Imagenes_Sistema/InvetarioProductos.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
      <div className="reserva-banner-container">
        {/* <div className="reserva-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
          Digitaliza y optimiza la gestión de tu inventario sin complicaciones.
          </h1>
          <p className="primary-text">
          Administra tu inventario con precisión y sin esfuerzo: controla existencias, evita faltantes y optimiza tu flujo de productos.
          </p>
          <button className="secondary-button">
            Empezar <FiArrowRight />{" "}
          </button>
        </div>
        <div className="reserva-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    
  );
};

export default Home;
