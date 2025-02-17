import React from "react";
import "../assets/Nav.css";

const Nav = () => {
  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar__location">
          <span className="top-bar__icon">📍</span>
          <div>
            <span className="top-bar__title">SCHOOL LOCATION</span>
            <span className="top-bar__details">56 MAIN STREET / PARIS</span>
          </div>
        </div>
        <div className="top-bar__hotline">
          <span className="top-bar__icon">📞</span>
          <div>
            <span className="top-bar__title">TELEPHONE</span>
            <span className="top-bar__details">+33 26 25 65 23</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="main-nav__logo">
          <h1>voot <span className="logo-accent">kids</span></h1>
        </div>
        <ul className="main-nav__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#pages">Pages</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="#inscription">Inscription</a></li>
        </ul>
        <div className="main-nav__menu">
          <button className="menu-button">☰</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
