import React,{useRef} from 'react';
import '../assets/Styles/Footer.css';

const Footer = () => {
    const footerRef = useRef(null); 
  return (
    <footer ref={footerRef} className="footer">
      
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Owner: Rohan Singh</p>
          <p>
            Address: Sona Agro, Belhadih- Bahorikpur Road, Belhadih Kharihani, Azamgarh, UP 276123
          </p>

        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sonaagroazm@gmail.com</p>
          <p>Phone: +91 7399000499</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/sonafarms?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/sona_farm0499?igsh=MWQwdWM0ZjgydmhuNg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
      <p>&copy; 2024 Sona Agro. Meticulously crafted by Suraj Yadav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
