import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "../scss/components_scss/Navigation.scss";

import { useAuth } from "../components/context/AuthContext";

const Navigation = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isDisabled = (path) => {
    return location.pathname === "login" || location.pathname === "signup";
  };
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/logout");
      console.log("You've been logged out successfully")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="navigation-container">
      {!user && (
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

      {user && (
        <div className="navigation-user-menu">
          <ul>
            <li>Hello, {user.email}!</li>
            <li className="give-away-btn">Give away items</li>
            <li>
              <button className="logout-btn" onClick={logoutHandler}>
                <Link to="/logout">Logout</Link>
              </button>
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
              Foundations and organizations
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
