import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
// import SonaAgro from "../images/SonaAgro.jpeg";
import SonaNew from "../images/SonaNew.png";
import Footer from "./Footer";
import '../Css/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header activee">
        <Link to="/">
          <img src={SonaNew} alt="Logo" className="logo" />
        </Link>
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Header;
