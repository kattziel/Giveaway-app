import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../../assets/Decoration.svg";
import { auth } from "../../firebase";
import "../../scss/components_scss/Signup.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authentication = useAuth();
  // const [repeatedPassword, setRepeatedPassword] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/form");
        authentication.signup(email, password);
      })
      .catch((error) => {
        console.log("You have got an error: ", error);
      });
  };


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
          SIGN UP
          <div>
            <Decoration />
          </div>
        </div>

        <form onSubmit={signupHandler} className="signup-textarea">
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
              <Link to="../form">Already have an account?<br/>Log in</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
