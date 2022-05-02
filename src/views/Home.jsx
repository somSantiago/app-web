import React, { Fragment, useEffect, useState } from "react";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";
import login from "../services/login";
import routes from "../routes/routes.json";

const Home = () => {
  // Variables
  const navigate = useNavigate();
  
  // Data
  const [data, setDatos] = useState({
    isLogged: login.isLoged(),
  });
  
  // Life Cycles
  useEffect(() => {
    if (!data.isLogged) {
      navigate(routes.LOGIN_PAGE);
    }
  },[]);
    
  // Methods
  const logOut = () => {
    login.removeToken();
    navigate(routes.LOGIN_PAGE);
  }

  // Render
  return (
    <div className="Home">
        <div className="container">
          <h2 className="title is-2">Home JS</h2>
          <button className="button is-danger" onClick={logOut}>Cerrar Sesion</button>
        </div>
        <img src={logo} className="App-logo " alt="logo" />
    </div>
  );
}

export default Home;