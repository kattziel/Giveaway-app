import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

import "../scss/components_scss/Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-navigation-section">
        <div className="login-navigation">
          <div className="login-user-menu">
            <ul>
              <Link to="../login">
                <li>Zaloguj się</li>
              </Link>
              <Link to="../signup">
                <li>Załóz konto</li>
              </Link>
            </ul>
          </div>
          <div className="page-menu">
            <ul>
              <li>Start</li>
              <li>O co chodzi?</li>
              <li>O nas</li>
              <li>Fundacja i organizacje</li>
              <li>Kontakt</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="login-logging-section">
        <div className="login-header">
          ZALOGUJ SIĘ
          <div>
            <Decoration />
          </div>
        </div>

        <div className="login-textarea">
          <div className="login-textarea-content">
            Email
            <textarea
              id=""
              type="text"
              className="login-form-text"
              ></textarea>
          </div>
          <div className="login-textarea-content">
            Hasło
            <textarea
              id=""
              type="password"
              className="login-form-text"
              ></textarea>
          </div>
        </div>

        <div className="login-buttons">
          <Link to="../signup">
            <btn className="login-btn">Załóz konto</btn>
          </Link>
          <btn className="login-btn">Zaloguj się</btn>
        </div>
      </div>
    </div>
  );
}

// <div className="login-container">
//   <div className="login-panel-section">
//     <div className="login-navigation-section">
//       <div className="login-navigation">
//         <div className="login-user-menu">
//           <ul>
//             <Link to="login">
//               <li>Zaloguj się</li>
//             </Link>
//             <Link to="signup">
//               <li>Załóz konto</li>
//             </Link>
//           </ul>
//         </div>
//         <div className="page-menu">
//           <ul>
//             <li>Start</li>
//             <li>O co chodzi?</li>
//             <li>O nas</li>
//             <li>Fundacja i organizacje</li>
//             <li>Kontakt</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
