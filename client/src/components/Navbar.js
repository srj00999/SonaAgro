import React, { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <NavLink className="navbar-links" to="/#target" smooth>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink className="navbar-links" to="/.#section">
            Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="Signup">
              Sign Up
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav>
        <ul className="navbar-list">
          <RenderMenu />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
