import React from "react";
import "../assets/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Section gauche : Logo et contact */}
        <div className="footer__left">
          <h1 className="footer__logo">voot <span className="logo-accent">kids</span></h1>
          <p>56 Main Street, PARIS</p>
          <p>hotline@gmail.com</p>
          <p>+33 26 25 65 848</p>
        </div>

        {/* Section droite : Infos supplémentaires */}
        <div className="footer__right">
          {/* Horaires */}
          <div className="footer__section">
            <h3>Opening Hours</h3>
            <p>Saturday - Friday</p>
            <p>09:00 - 06:00 PM</p>
          </div>

          {/* Programmes */}
          <div className="footer__section">
            <h3>Our Program</h3>
            <p>Arts & Drawing</p>
            <p>Arts & Drawing</p>
            <p>Arts & Drawing</p>
          </div>

          {/* News */}
          <div className="footer__section">
            <h3>Recent News</h3>
            <p>Fermeture exceptionnelle le 25 DEC 2028</p>
            <p>Fermeture exceptionnelle le 25 DEC 2028</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
