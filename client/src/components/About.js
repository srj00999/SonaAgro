import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {

const [userData, setUserData] = useState({});
const navigate =  useNavigate();

const callAboutPage =  async()=>{
  try{
    const res  = await fetch('/about' , {
      method:"GET",
      headers:{
        Accept:"appllication/json",
        "Content-Type" : "application/json"
      },
      credentials:"include" // is used to sending cookie data
    });

    const data = await res.json();
    
    setUserData(data);
    console.log("Data", data);
    console.log("UserData", userData);
    

    if(!res.status === 200){
      const error =  new Error(res.error);
      throw error;
    }

  }catch(err){
    console.log(err);
    navigate('/login');
  }
}


useEffect(()=>{
  callAboutPage();
},[]);



  return (
    <>
    <div>
      <form method="GET"> 
      <div>
        <div>
        <h1>This is about Page</h1>
        </div>
      </div>

      </form>
    </div>
    </>
  )
}

export default About