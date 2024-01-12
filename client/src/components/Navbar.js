
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import '../Css/Navbar.css';

const Navbar = () => {
  const { state } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="/#target" smooth>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="contact">
              Hi User!
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links logout" activeClassName="active" to="logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="/.#section">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" activeClassName="active" to="login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links signup" activeClassName="active" to="Signup">
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
