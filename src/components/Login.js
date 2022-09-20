import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import {useState} from 'react';
import {useAuth} from '../hooks/useAuth';
import "../scss/components_scss/Login.scss";

export default function Login() {

  const [user, setUser] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user)
    navigate('/');
  }

  return (
    <div className="login-container">


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
              onChange={(e) => setUser(e.target.value)}
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
          <btn
            className="login-btn"
            onClick={handleLogin}
            >Zaloguj się</btn>
        </div>
      </div>
    </div>
  );
}
