import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import SonaAgro from "../images/SonaAgro.jpeg";
import Footer from "./Footer";

const Header = () => {
  return (
    <div >
      <div className="header activee">
        <Link to="/">
          <img src={SonaAgro} alt="Logo" className="logo" />
        </Link>
        <Navbar />
      </div>
      <Outlet />
      <Footer/>
      
    </div>
  );
};

export default Header;
