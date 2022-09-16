import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

import "../scss/components_scss/Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-navigation-section">
        <div className="login-navigation">
          <div className="login-user-menu">
            <ul>
            <li>
              <Link to="../login">
                Zaloguj się
              </Link>
            </li>
            <li>
              <Link to="../signup">
                Zarejestruj się
              </Link>
            </li>
            </ul>
          </div>
          <div className="page-menu">
            <ul>
              <li>Start</li>
              <li>O co chodzi?</li>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="login-logging-section">
        <div className="login-header">
          ZALOGUJ SIĘ
          <div>
            <Decoration />
          </div>
        </div>

        <div className="login-textarea">
          <div className="login-textarea-content">
            Email
            <input
              id=""
              type="text"
              className="login-form-text"
              ></input>
          </div>
          <div className="login-textarea-content">
            Hasło
            <input
              id=""
              type="password"
              className="login-form-text"
              ></input>
          </div>
        </div>

        <div className="login-buttons">
          <btn className="login-btn">
          <Link to="../signup">
            Zarejestruj się
          </Link>
          </btn>
          <btn className="login-btn">Zaloguj się</btn>
        </div>
      </div>
    </div>
  );
}
