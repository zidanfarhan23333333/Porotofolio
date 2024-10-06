import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Membangun pengalaman digital yang menginspirasi</h2>
        <p>
          Desain Frontend & Ui/ux yang penuh semangat | Mengubah ide menjadi
          solusi web yang mulus dan menakjubkan secara visual
        </p>
      </div>

      <div className="hero-img">
        <div>
          <img src="./assets/images/farhan.jpg" alt="Profile" />
        </div>
        <div className="tech-icons-wrapper">
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="React Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="HTML Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css.png" alt="CSS Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="JavaScript Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
