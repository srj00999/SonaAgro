import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show , setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
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
      <div>
        <div>
          <h1>WELCOME TO THE SONA AGRO</h1>
          <h3>{userName}</h3>
          <h3>
            {show
              ? "Happy ,to see you back"
              : "We are Happy to Serve You Better"}
          </h3>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
