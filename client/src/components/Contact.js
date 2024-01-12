import React, { useState, useEffect } from "react";
import '../Css/Contact.css';

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContactPage = async () => {
    try {
      const res = await fetch("https://sona-agro.onrender.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setUserData({
        ...data,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContactPage();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("Message not sent");
    } else {
      alert("Message Sent");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="home-container">
      <div className="contact-form-container">
        <form className="contact-form" method="POST">
          <div className="contact-form-inputs">
            <input
              type="text"
              id="contact_form_name"
              className="contact-form-input"
              name="name"
              value={userData.name}
              onChange={handleInputs}
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              id="contact_form_email"
              className="contact-form-input"
              name="email"
              value={userData.email}
              onChange={handleInputs}
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              id="contact_form_phone"
              className="contact-form-input"
              name="phone"
              value={userData.phone}
              onChange={handleInputs}
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="contact-form-message">
            <textarea
              className="text-field"
              onChange={handleInputs}
              name="message"
              value={userData.message}
              placeholder="Message"
              cols="74"
              rows="8"
            ></textarea>
          </div>
          <div className="contact-form-button">
            <button
              type="submit"
              className="button-contact-submit"
              onClick={contactForm}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
