import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const res = await fetch("/register", {
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
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work"></label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Your Profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password"></label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword"></label>
                  <input
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    onChange={handleInputs}
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
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

export default Signup;
