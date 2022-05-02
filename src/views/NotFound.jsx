import * as React from "react";
import NotFoundImg from "../assets/img/notFound.png"
import "../App.css";

function NotFound () {
  return (
    <div className="NotFound">
        <img  className="notFound" src={NotFoundImg} alt="NotFound"  />
    </div>
  );
}

export default NotFound;