import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from "../App";

const Login = () => {

const {state, dispatch} = useContext(UserContext);
const navigate = useNavigate();

const [email, setEmail] = useState();
const [password, setPassword] = useState();

const loginUser  =  async (e) => {
  e.preventDefault();

  const res = await fetch('/signin', {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },body:JSON.stringify({
        email,
        password
      })
  } );

  const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      dispatch({type:"USER", payload:true})
      window.alert("Login Successful");
      console.log("Login Successful");

      navigate("/");
    }
}


  return (
    <>
      <section className=" sign-in">
        <div className="container">
          <div className=" sign-in-content">
            <div className=" sign-in-form">
              <h2 className="form-title">Sign in</h2>
              <form method="POST" className="register-form">
                
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="on"
                    value={email || ""}
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    placeholder="Your Email"
                  />
                </div>
               
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password || ""}
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    placeholder="Password"
                  />
                </div>
               
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name=" sign-in"
                    id=" sign-in"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
