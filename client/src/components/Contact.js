// Contact.js
import React from 'react';
import '../assets/Styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or inquiries? Feel free to reach out to us. We're here to help!
        </p>

        <div className="contact-details">
          <div className="contact-info">
            <h3>Address</h3>
            <p>Sona Agro, Belhadih- Bahorikpur Road, Belhadih Kharihani, Azamgarh, UP 276123</p>
          </div>

          <div className="contact-info">
            <h3>Email</h3>
            <p>sonaagroazm@gmail.com</p>
          </div>

          <div className="contact-info">
            <h3>Phone</h3>
            <p> +91 7399000499</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
