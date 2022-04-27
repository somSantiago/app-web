import * as React from "react";
import logo from "../logo.svg";

function Home () {
  return (
    <div className="Home">
        <h2 className="title is-2">Home JS</h2>
        <img src={logo} className="App-logo " alt="logo" />
        <button className="button is-dark">Acceder</button>
    </div>
  );
}

export default Home;