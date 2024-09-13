import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tienes preguntas?</h1>
      <p className="primary-text">
        Deja tus datos y nos pondremos en contacto contigo, buen día.
      </p>
      <div className="contact-form-container">

        <input type="text" placeholder="juanito@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
      
    </div>
  );
};

export default Contact;
