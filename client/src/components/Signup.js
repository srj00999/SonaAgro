import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("https://sona-agro.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      <div className="boxes">
        <form className="form-login" method="POST" autoComplete="off">
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              onChange={handleInputs}
        
            />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={handleInputs}
            
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="off"
              onChange={handleInputs}
              
            />
            <span>Phone no</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="work"
              id="work"
              autoComplete="off"
              onChange={handleInputs}
            
            />
            <span>Your work</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              onChange={handleInputs}
              
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="cpassword"
              id="cpassword"
              autoComplete="off"
              onChange={handleInputs}
              
            />
            <span>Confirm Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#">Forgot Password?</a>
            <a href="#">Signup</a>
          </div>
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="Register"
            onClick={PostData}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
