import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

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
      window.alert("INvalid Registration");
      console.log("INvalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigate("/login");
    }
  };


  
  return (
    <>
    <div className="home-container">
        
        <div className="boxes">
          <form className="form-login" method="POST" autocomplete="off">
            <h2>Sign Up</h2>
            <div className="inputBox">
            <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Your Name"
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
                    placeholder="Your Email"
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
                    placeholder="Your Phone"
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
                    placeholder="Your Profession"
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
                    placeholder="Password"
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
                    placeholder="Confirm Password"
                  />
              <span>Confirm Password</span>
              <i></i>
            </div>
            <div className="links">
              <a href="#">Forgot Password ?</a>
              <a href="#">Signup</a>
            </div>
            <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />
          </form>
        </div>
        </div>
    </>
  );
};

export default Signup;
