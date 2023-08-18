//general
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { Link as ScrollLink } from "react-scroll";
// import { useAuth } from "../hooks/useAuth";

//styles
import "../scss/components_scss/Navheader.scss";

//function
export default function Navheader() {
  const [user, setUser] = useState(false);
  // const auth = useAuth();

  return (
    <div className="navheader-container">
      <div className="img-section">
        <img src={require("../assets/Home-Hero-Image.jpg")} />
      </div>

      <div className="content-section">
        <div className="main-section">
          <div className="header">
            <p>Start helping out now!</p>
            <p>Give unwanted items to trusted hands!</p>
          </div>
          <div className="decoration">
            <Decoration />
          </div>
          <div className="nav-buttons">
            {user ? (
              <Link to="form">
                <button className="nav-btn">GIVE AWAY ITEMS</button>
              </Link>
            ) : (
              <Link to="login">
                <button className="nav-btn">GIVE AWAY ITEMS</button>
              </Link>
            )}
            {user ? (
              <Link to="form">
                <button className="nav-btn">ORGANIZE A COLLECTION</button>
              </Link>
            ) : (
              <Link to="login">
                <button className="nav-btn">ORGANIZE A COLLECTION</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
