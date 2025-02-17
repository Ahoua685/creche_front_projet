import React from "react";
import "../assets/Body.css";

const Body = () => {
  return (
    <div>
      {/* Section principale */}
      <section className="banner">
        <div className="banner__arrows left"></div>
        <div className="banner__content"></div>
        <div className="banner__arrows right"></div>
      </section>

      {/* Section Nos Services */}
      <section className="services">
        <h2>NOS SERVICES</h2>
        <div className="services__container">
          <div className="service">
            <div className="service__image"></div>
            <h3>DRAWING & PAINTING</h3>
            <button className="service__button">DETAIL</button>
          </div>
          <div className="service">
            <div className="service__image"></div>
            <h3>DRAWING & PAINTING</h3>
            <button className="service__button">DETAIL</button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="testimonials">
        <h2>What Parents Say About Our Service</h2>
        <div className="testimonials__container">
          <div className="testimonial">
            <h3>JOHN DOE ⭐⭐⭐⭐⭐</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              molestiae, ex earum aut commodi.
            </p>
          </div>
          <div className="testimonial">
            <h3>SHAIRA CLAR ⭐⭐⭐⭐⭐</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              molestiae, ex earum aut commodi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;