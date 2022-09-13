//general
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
//styles
import "../scss/components_scss/Navheader.scss";

export default function Navheader() {

// const anchor = document.querySelector("scroll-simple-steps");
// anchor.scrollIntoView({behavior: 'smooth', block: 'center'});

return (

    <div className="navheader-container">
      <div className="img-section">
        <img src={require("../assets/Home-Hero-Image.jpg")} />
      </div>

      <div className="content-section">
        <div className="navheader-navigation">
          <div className="user-menu">
            <ul>
              <Link to="login"><li>Zaloguj się</li></Link>
              <Link to="signup"><li>Załóz konto</li></Link>
            </ul>
          </div>
          <div className="page-menu">
            <ul>
              <li>Start</li>
              <Link to="/hash-scroll#hash-section-simplesteps">
              <li>O co chodzi?</li>
              </Link>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>

        <div className="main-section">
          <div className="header">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce!</p>
          </div>
          <div className="decoration">
            <Decoration />
          </div>
          <div className="nav-buttons">
            <Link to="login"><button className="nav-btn">ODDAJ RZECZY</button></Link>
            <Link to="login"><button className="nav-btn">ZORGANIZUJ ZBIÓRKĘ</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
