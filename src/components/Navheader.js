//general
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "../hooks/useAuth";

//styles
import "../scss/components_scss/Navheader.scss";

//function
export default function Navheader() {
  const auth = useAuth();

  return (
    <div className="navheader-container">
      <div className="img-section">
        <img src={require("../assets/Home-Hero-Image.jpg")} />
      </div>

      <div className="content-section">
        <div className="main-section">
          <div className="header">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce!</p>
          </div>
          <div className="decoration">
            <Decoration />
          </div>
          <div className="nav-buttons">
            {auth.user ? (
              <Link to="form">
                <button className="nav-btn">ODDAJ RZECZY</button>
              </Link>
            ) : (
              <Link to="login">
                <button className="nav-btn">ODDAJ RZECZY</button>
              </Link>
            )}
            {auth.user ? (
              <Link to="form">
                <button className="nav-btn">ZORGANIZUJ ZBIÓRKĘ</button>
              </Link>
            ) : (
              <Link to="login">
                <button className="nav-btn">ZORGANIZUJ ZBIÓRKĘ</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
