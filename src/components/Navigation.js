//general
import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../hooks/useAuth";

//styles
import "../scss/components_scss/Navigation.scss";

//function
const Navigation = () => {
  const auth = useAuth();

  return (
    <div className="navigation-container">
      {!auth.user && (
        <div className="navigation-user-menu">
          <ul>
            <li>
              <Link to="login">Zaloguj się</Link>
            </li>
            <li>
              <Link to="signup">Zarejestruj się</Link>
            </li>
          </ul>
        </div>
      )}

      {auth.user && (
        <div className="navigation-user-menu">
          <ul>
            <li>Witaj, {auth.user}!</li>
            <li className="give-away-btn">Oddaj rzeczy</li>
            <li>
              <Link to="/logout">Wyloguj</Link>
            </li>
          </ul>
        </div>
      )}

      <div className="navigation-page-menu">
        <ul>
          <li>
            <Link to="/" >Start</Link>
          </li>
          <li>
            <ScrollLink
              activeClass="active"
              className="test1"
              to="test1"
              spy={true}
              smooth={true}
              duration={500}
            >
              O co chodzi?
            </ScrollLink>
          </li>
          <li>O nas</li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
