import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "../Css/Login.css";


const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    
    document.querySelector(".home-container").classList.add("fadeIn");
  }, []);

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("https://sona-agro.onrender.com/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      console.log("Login Successful");

      navigate("/");
    }
  };

  return (
    <div className="home-container">
      <div className="box">
        <form className="form-login" method="POST">
          <h2>Sign in</h2>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="on"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot Password?</a>
            <a href="#">Signup</a>
          </div>

          <input
            type="submit"
            name="sign-in"
            id="sign-in"
            className="form-submit"
            value="Log In"
            onClick={loginUser}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
