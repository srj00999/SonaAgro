// Header.js

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import '../assets/Styles/Header.css';
import SonaAgro from '../assets/Images/SonaAgro.png';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="logo">
        <Link to='/'>
          <img src={SonaAgro} alt='Logo' />
        </Link>
      </div>
      {isMobile ? (
        <>
          {!mobileMenuOpen && (
            <div
              className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
            >
              &#9776;
            </div>
          )}
          {mobileMenuOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
        </>
      ) : (
        <DesktopMenu />
      )}
    </header>
  );
};

const MobileMenu = ({ closeMobileMenu }) => {
  return (
    <div className="mobile-menu">
      <MobileMenuList closeMobileMenu={closeMobileMenu} />
    </div>
  );
};

const MobileMenuList = ({ closeMobileMenu }) => {
  return (
    <ul className="mobile-menu-list">
      <li>
        <Link to="/" onClick={closeMobileMenu}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" onClick={closeMobileMenu}>
          About
        </Link>
      </li>
      <li>
        <Link to="/services" onClick={closeMobileMenu}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={closeMobileMenu}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

const DesktopMenu = () => {
  return (
    <nav className="desktop-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
