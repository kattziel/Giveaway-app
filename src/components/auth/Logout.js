import React, { useEffect } from "react";
// import { useAuth } from "../../hooks/useAuth";
import "../../scss/components_scss/Logout.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../../assets/Decoration.svg";

export const Logout = () => {
  // const auth = useAuth();

  // useEffect(() => {
  //   auth.logout();
  // }, [auth]);

  return (
    <div className="signup-container">
      <div className="signup-logging-section">
        <div className="signup-header">
          You've logged out successfully
          <div>
            <Decoration />
          </div>
        </div>

        <div className="signup-buttons">
          {/* <btn className="signup-btn">
            <Link to="../login">Zaloguj się</Link>
          </btn> */}
          <btn className="loggedout-btn">
            <Link to="/">Main page</Link>
          </btn>
        </div>
      </div>
    </div>
  );
};
