import React, { useEffect , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";

const Logout = () => {

//promises
const {state, dispatch} = useContext(UserContext);


const navigate = useNavigate();
useEffect(()=>{
    fetch('https://sona-agro.onrender.com/logout',{
        method:"GET",
        headers:{
            Accept:"appllication/json",
            "Content-Type":"appllication/json"
        },
        credentials:"include"
    }).then((res)=>{
        dispatch({type:"USER", payload:false})
        navigate('/login');
        if(res.status !== 200){
            const error = new Error(res.error);
            throw error;
        }
    }).catch((err)=>{
        console.log(err);
    });
});



  return (
    <>
    <div className="home-container">
        <div className='logout_container'>
            <h1>Logout Successfully</h1>
        </div>
    </div>
    </>
  )
}

export default Logout;