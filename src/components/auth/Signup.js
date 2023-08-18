import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../../assets/Decoration.svg";
import { auth } from "../../firebase";
import { useAuth } from "../context/AuthContext";
import "../../scss/components_scss/Signup.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useAuth();
  const navigate = useNavigate();
  // const [repeatedPassword, setRepeatedPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/form");
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-logging-section">
        <div className="signup-header">
          SIGN UP
          <div>
            <Decoration />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="signup-textarea">
          <div className="signup-textarea-content">
            Email
            <input
              type="email"
              className="signup-form-text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="signup-textarea-content">
            Password
            <input
              type="password"
              className="signup-form-text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          {/* <div className="signup-textarea-content">
            Powtórz hasło
            <input
              type="password"
              className="signup-form-text"
              onChange={(e) => setRepeatedPassword(e.target.value)}
              value={repeatedPassword}
            ></input>
          </div> */}

          <div className="signup-buttons">
            <button className="auth-btn" type="submit">
              Sign up
            </button>
            <button className="auth-btn">
              <Link to="../form">
                Already have an account?
                <br />
                Log in
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
