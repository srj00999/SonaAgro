import React, { useState, useEffect } from "react";

const Contact = () => {

  const [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    message:""

  });
  
  
  
  const userContactPage =  async()=>{
    try{
      const res  = await fetch('/getdata' , {
        method:"GET",
        headers:{
          "Content-Type" : "application/json"
        },
        
      });
  
      const data = await res.json();
      
      setUserData({...data, name:data.name , email:data.email , phone:data.phone} );
      console.log("Data", data);
      console.log("UserData", userData);
      
  
      if(!res.status === 200){
        const error =  new Error(res.error);
        throw error;
      }
  
    }catch(err){
      console.log(err);
      
    }
  }
  
  
  useEffect(()=>{
    userContactPage();
  },[]);


  //we are storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData, [name]:value 
    });
  }

  //Send input data to backend
  const contactForm = async(e)=>{
    e.preventDefault();

    const { name, email, phone, message} = userData;
    const res = fetch('/contact', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },body: JSON.stringify({
        name, email, phone, message
      })
    });
    const data  = (await res).json();
    if(!data){
      console.log("message not send");
    }else{
      alert("Message Send");
      setUserData({...userData, message:""});
    }
  }

  return (
    <div className='home-container'>
      <form method="POST">
        <div>
          <input
            type="text"
            id="contact_form_name"
            className="contact_form_name"
            name="name"
            value={userData.name}
            onChange={handleInputs}
            placeholder="Your name"
            required
          />
          <input
            type="text"
            id="contact_form_email"
            className="contact_form_email"
            name="email"
            value={userData.email}
            onChange={handleInputs}
            placeholder="Your Email"
            required
          />
          <input
            type="number"
            id="contact_form_phone"
            className="contact_form_phone"
            name="phone"
            value={userData.phone}
            onChange={handleInputs}
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div>
          <textarea className="text_field" id="" 
          onChange={handleInputs} 
          name="message"
          value={userData.message} 
          placeholder="Message" cols="74" rows="8"></textarea>
        </div>
        <div className="contact_form_button"></div>
        <button type="submit" className="button contact_submit_button" onClick={contactForm}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
