import React, { Fragment, useEffect, useState } from "react";
import logo from "../logo.svg";
import api from "../services/api";


const Home = () => {
  const [list, setList] = useState([]);

  
  useEffect(() => {
    console.log("pendiente");
  }, []);
    
  return (
    <div className="Home">
        <h2 className="title is-2">Home JS</h2>
        <img src={logo} className="App-logo " alt="logo" />
        
    </div>
  );
}

export default Home;