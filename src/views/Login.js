import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setDatos] = useState({
    user: "",
    pass: "",
    isLogged: 1,
  });

  useEffect(() => {
    if (data.isLogged) {
      navigate("/dashboard");
    }
  });

  const handleInputChange = (event) => {
    setDatos({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + data.user + " " + data.pass);
    navigate("/dashboard");
  };

  return (
    <Fragment>
      <div className="Login container p-5">
        <div className="card column is-two-fifths">
          <header className="card-header ">
            <p className="card-header-title">Login</p>
            <button className="card-header-icon" aria-label="more options">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </button>
          </header>
          <div className="card-content ">
            <div className="content">
              <form className="field" onSubmit={sendData}>
                <div className="control has-icons-left has-icons-right m-3">
                  <input
                    className="input"
                    type="email"
                    placeholder="Usuario"
                    name="user"
                    onChange={handleInputChange}
                  />
                  <span className="icon is-small is-left">
                    <ion-icon name="person-circle-outline"></ion-icon>
                  </span>
                  <span className="icon is-small is-right">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                </div>

                <div className="control has-icons-left has-icons-right m-3">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="pass"
                    onChange={handleInputChange}
                  />
                  <span className="icon is-small is-left">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                  </span>
                  <span className="icon is-small is-right">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                </div>
                <input
                  className="button is-link m-3"
                  type="submit"
                  value="Acceder"
                />
              </form>
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Crear Cuenta
            </a>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
