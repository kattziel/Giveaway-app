import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../../assets/Decoration.svg";
import { useAuth } from "../../hooks/useAuth";
import "../../scss/components_scss/Signup.scss";

export default function Signup() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repeatedPassword, setRepeatedPassword] = useState("");
  // const auth = useAuth();
  // const navigate = useNavigate();

  // const handleSignup = () => {
  //   if (password === repeatedPassword) {
  //     const newUser = { email, password };
  //     auth.signup(newUser);
  //     navigate("/");
  //     console.log("password and repeated password: ", password, repeatedPassword);
  //   }
  //   console.log("zarejestrowany");
  // };

  return (
    <div className="signup-container">
      <div className="signup-logging-section">
        <div className="signup-header">
          ZAREJESTRUJ SIĘ
          <div>
            <Decoration />
          </div>
        </div>

        <div className="signup-textarea">
          <div className="signup-textarea-content">
            Email
            <input
              id=""
              type="email"
              className="signup-form-text"
              // onChange={(e) => setEmail(e.target.value)}
              // value={email}
            ></input>
          </div>
          <div className="signup-textarea-content">
            Hasło
            <input
              id=""
              type="password"
              className="signup-form-text"
              // onChange={(e) => setPassword(e.target.value)}
              // value={password}
            ></input>
          </div>
          <div className="signup-textarea-content">
            Powtórz hasło
            <input
              id=""
              type="password"
              className="signup-form-text"
              // onChange={(e) => setRepeatedPassword(e.target.value)}
              // value={repeatedPassword}
            ></input>
          </div>
        </div>

        <div className="signup-buttons">
          <btn className="signup-btn">
            <Link to="../form">Zaloguj się</Link>
          </btn>

          <btn className="signup-btn"
          // onClick={handleSignup}
          >
            Zarejestruj się
          </btn>
        </div>
      </div>
    </div>
  );
}
