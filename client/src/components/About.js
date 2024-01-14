// About.js
import React from 'react';
import '../assets/Styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2 className="about-title">Welcome to Sona Agro</h2>
        <p className="about-text">
          Sona Agro is a company dedicated to farming goats, fish, birds, and poultry. We specialize in providing reliable and efficient services to meet the needs of our customers, ensuring the highest quality products and services.
        </p>

        <h3 className="about-subtitle">Leadership Team</h3>
        <ul className="about-list">
          <li className="about-list-item">Founder: Kartik Yadav</li>
          <li className="about-list-item">Director: Siddharth Yadav</li>
          <li className="about-list-item">Managing Director: Rohan Singh</li>
        </ul>

        <h3 className="about-subtitle">Our Services</h3>
        <p className="about-text">
          At Sona Agro, we take orders and supply our products to customers, contributing to the growth and success of their businesses.
        </p>
      </div>
    </div>
  );
};

export default About;
