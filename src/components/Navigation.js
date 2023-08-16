//general
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../hooks/useAuth";

//styles
import "../scss/components_scss/Navigation.scss";

//function
const Navigation = () => {
  const auth = useAuth();
  const location = useLocation();
  const isDisabled = (path) => {
    return location.pathname === "login" || location.pathname === "signup";
  };

  return (
    <div className="navigation-container">
      {!auth.user && (
        <div className="navigation-user-menu">
          <ul>
            <li>
              <Link to="login">Log in</Link>
            </li>
            <li>
              <Link to="signup">Sign up</Link>
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
            <Link to="/">Start</Link>
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
              What is this about?
            </ScrollLink>
          </li>



          <li>
            <ScrollLink
              activeClass="active"
              className="test2"
              to="test2"
              spy={true}
              smooth={true}
              duration={500}
            >
              About us
            </ScrollLink>
          </li>



          <li>
            <ScrollLink
              activeClass="active"
              className="test3"
              to="test3"
              spy={true}
              smooth={true}
              duration={500}
            >
              Fundations and organizations
            </ScrollLink>
          </li>



          <li>
            <ScrollLink
              activeClass="active"
              className="test4"
              to="test4"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>



        </ul>
      </div>
    </div>
  );
};

export default Navigation;
