// Header.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/Styles/Header.css';
import SonaAgro from '../assets/Images/SonaAgro.png';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <header className={`header ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="logo">
        <img src={SonaAgro} alt='Logo' />
      </div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </header>
  );
};

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      {/* Placeholder for hamburger menu icon */}
      <div className="hamburger-icon">&#9776;</div>
    </div>
  );
};

const DesktopMenu = () => {
  return (
    <nav className="desktop-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      {/* Add more navigation links as needed */}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
