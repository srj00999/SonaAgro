// Service.js
import React from 'react';
import '../assets/Styles/Service.css';

const Service = () => {
  return (
    <div className="service">
      <div className="service-content">
        <h2 className="service-title">Our Services</h2>
        <p className="service-text">
          We offer a variety of services including farming goats, fish, birds, and poultry. 
          Our goal is to provide reliable and efficient services to meet the needs of our customers.
        </p>

        <h3>Our Specializations</h3>
        <ul className="service-list">
          <li className="service-list-item">Goat Farming</li>
          <li className="service-list-item">Fish Farming</li>
          <li className="service-list-item">Poultry Farming</li>
          <li className="service-list-item">Bird Farming</li>
        </ul>

        <p className="service-text">
          In addition to our core services, we specialize in goat farming, fish farming, poultry farming, and bird farming. 
          Our team is dedicated to delivering the best results for our clients.
        </p>
      </div>
    </div>
  );
};

export default Service;
