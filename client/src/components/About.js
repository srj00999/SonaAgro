import React from 'react';
import '../assets/Styles/About.css';
import managingDirector from '../assets/Images/managingDirector.jpeg';

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
          <li className="about-list-item">
            <div className="team-member">
              <img src={managingDirector} alt="Founder Mahendra Singh" className="team-member-image" />
              <p className="team-member-name">Mahendra Singh</p>
            </div>
          </li>
          <li className="about-list-item">
            <div className="team-member">
              <img src={managingDirector} alt="Director Rahul Singh" className="team-member-image" />
              <p className="team-member-name">Rahul Singh</p>
            </div>
          </li>
          <li className="about-list-item">
            <div className="team-member">
              <img src={managingDirector} alt="Managing Director Rohan Singh" className="team-member-image" />
              <p className="team-member-name">Rohan Singh</p>
            </div>
          </li>
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
