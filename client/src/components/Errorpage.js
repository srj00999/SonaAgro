import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/Error.css';

const Errorpage = () => {
  return (
    <div className='home-container'>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404"></div>
        </div>
        <h1>404</h1>
        <h2>we are sorry, page not found!</h2>
        <p className="mb-5">
          The Page you are looking for might have been removed had its name changed or is temporary unavailable.  
        </p>
        <NavLink to="/">  Back To Homepage</NavLink>
      </div>
    </div>
  );
};

export default Errorpage;
