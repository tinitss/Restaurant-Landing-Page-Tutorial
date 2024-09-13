import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "../css/AtencionCliente.css"

const Footer = () => {
  return (
    <div className="contact-page-wrapper" id="atencion-cliente">
      <h1 className="primary-heading">Atención al cliente</h1>

      <div className="info-sections">
        <div className="info-section horarios-section">
          <h3 className="horarios">Horarios de atención</h3>
          <div className="">
            <div className="footer-section-columns">
              <span>Lunes - Sábado</span>
            </div>
            <div className="footer-section-columns">
              <span>8am - 5pm</span>
            </div>
          </div>
        </div>

        <div className="info-section ">
          <h3 className="horarios">Contacto</h3>
          <div className="footer-section-two">
            <div className="">
              <span>Teléfono</span>
              <span>Email</span>
              <span>Dirección</span>
            </div>
            <div className="footer-section-columns">
              <span>(+57) 319-697-8413</span>
              <span>felysoft_atencionCliente@gmail.com</span>
              <span>Calle 25 D Bis 96-58 (Bogotá - Colombia)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="span-terms">
        <span>Términos y condiciones</span>
        <span>Politicas de privacidad</span>
      </div>


      <div className="footer-icons">
        <BsTwitter />
        <SiLinkedin />
        <BsYoutube />
        <FaFacebookF />
      </div>

    </div>
  );
};

export default Footer;
