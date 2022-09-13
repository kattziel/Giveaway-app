import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

import "../scss/components_scss/Signup.scss";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-navigation-section">
        <div className="signup-navigation">
          <div className="signup-user-menu">
            <ul>
              <Link to="../login">
                <li>Zaloguj się</li>
              </Link>
              <Link to="../signup">
                <li>Załóz konto</li>
              </Link>
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

      <div className="signup-logging-section">
        <div className="signup-header">
          ZAŁÓZ KONTO
          <div>
            <Decoration />
          </div>
        </div>

        <div className="signup-textarea">
          <div className="signup-textarea-content">
            Email
            <textarea
              id=""
              type="text"
              className="signup-form-text"
              ></textarea>
          </div>
          <div className="signup-textarea-content">
            Hasło
            <textarea
              id=""
              type="password"
              className="signup-form-text"
              ></textarea>
          </div>
          <div className="signup-textarea-content">
            Powtórz hasło
            <textarea
              id=""
              type="password"
              className="signup-form-text"
              ></textarea>
          </div>
        </div>

        <div className="signup-buttons">
          <Link to="../signup">
            <btn className="signup-btn">Zaloguj się</btn>
          </Link>
          <btn className="signup-btn">Załóz konto</btn>
        </div>
      </div>
    </div>
  );
}