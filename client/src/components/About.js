// About.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fish from "../images/Fish.png";
import '../Css/About.css';

const About = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("https://sona-agro.onrender.com/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include", // is used to sending cookie data
      });

      const data = await res.json();

      setUserData(data);
      console.log("Data", data);
      console.log("UserData", userData);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="about-page-container">
          <div className="about-container">
            <form method="GET">
              <div className="about-content">
                <h1>About </h1>
                <p>
                  The main discussion topic at Sona Agro often paves the way
                  to surprising and unexpected conversations thanks to our
                  engaging users. Our forum is dedicated to enhancing the
                  online experience by offering plenty of opportunities for
                  users to engage with each other in an interesting and safe
                  online environment.
                </p>
              </div>
            </form>
          </div>
          <div className="about-page-image">
            <img src={Fish} alt="about image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
