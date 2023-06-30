import React, { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";
import { initialState, reducer } from "./reducer/UseReducer";

 //context api
 export const UserContext = createContext();

  const Routing = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </>
    );
  };
const App = () => {
 const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
        <Routing/>
      </UserContext.Provider>
    </>
  );
};

export default App;
