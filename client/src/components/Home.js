import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Image1 from "../images/Image1.png";
import '../Css/Home.css'

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("https://sona-agro.onrender.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-container-item">
          <h1>WELCOME TO THE SONA AGRO</h1>
          <div className="welcome-note-container">
            <div>
              <h3 className="welcome-note">{userName}</h3>
            </div>
            <h3>
              {show ? (
                <div className="welcome-note">"Happy ,to see you back"</div>
              ) : (
                <div className="welcome-note">
                  "Nurturing Oceans, Harvesting Excellence"
                </div>
              )}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className="service-container">
          <div className="service_disk">
            <div className="service-heading">
              <h1 id="target">Services</h1>
            </div>
            <div className="service-item-container">
              <div className="service-box">
                <div className="service-picture-container">
                  <img src={Image1} alt="about image" />
                </div>
                <div className="service-headings">
                  <h2>Services 1</h2>
                  <p>Fishes</p>
                  <button>Buy Now</button>
                </div>
              </div>
              <div className="service-box">
                <div className="service-picture-container">
                  <img src={Image1} alt="about image" />
                </div>
                <div className="service-headings">
                  <h2>Services 2</h2>
                  <p>Chicken</p>
                  <button>Buy Now</button>
                </div>
              </div>
              <div className="service-box">
                <div className="service-picture-container">
                  <img src={Image1} alt="about image" />
                </div>
                <div>
                  <div className="service-headings">
                    <h2>Services 3</h2>
                    <p>Fishes</p>
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
