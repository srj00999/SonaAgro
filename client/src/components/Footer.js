import React from "react";
import '../Css/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section footer-contact">
        <h1>Contact</h1>
        <h4>Sona Agro</h4>
        <h4>Belhadih- Bahorikpur Road</h4>
        <h4>Belhadih Kharihani</h4>
        <h4>Azamgarh UP 276123</h4>
      </div>
      <div className="footer-section footer-contact">
        <h4>Mobile. 7399000499</h4>
        <h4>Email: sonaagroazm@gmail.com</h4>
        <h4>Book a Consultation</h4>
      </div>
      <div className="footer-section footer-follow">
        <h4>Follow Us</h4>
        {/* Add social media icons or links here */}
      </div>
      <div className="footer-section footer-subscribe">
        <h4>Subscribe to our Newsletter</h4>
        {/* Add a subscription form or related content here */}
      </div>
    </div>
  );
};

export default Footer;
