import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./Login.css";



const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
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
    <>
      <div className="home-container">
        
        <div className="box">
          <form className="form-login" method="POST" autocomplete="off">
            <h2>Sign in</h2>
            <div className="inputBox">
              {/* <input type="text" required="required"> */}
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="on"
                value={email || ""}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email"
              />
              <span>Userame</span>
              <i></i>
            </div>
            <div className="inputBox">
              {/* <input type="password" required="required"> */}
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="off"
                value={password || ""}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href="#">Forgot Password ?</a>
              <a href="#">Signup</a>
            </div>
            {/* <input type="submit" value="Login"> */}
            <input
              type="submit"
              name=" sign-in"
              id=" sign-in"
              className="form-submit"
              value="Log In"
              onClick={loginUser}
            />
          </form>
        </div>
        </div>
    </>
  );
};

export default Login;
