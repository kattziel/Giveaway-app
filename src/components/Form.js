import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

import "../scss/components_scss/Form.scss";

import Questionnaire from "./Questionnaire";
import ContactUs from "./Contact";

export const Form = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/logout");
  };

  return (
    <div>
      <div className="form-header">
        <div className="form-header-img-section">
          <img src={require("../assets/Form-Hero-Image.jpg")} alt="sweaterimage"/>
        </div>

        <div className="form-header-content-section">
          <div className="form-header-header-section">
            <div className="header-div">
              <p>Oddaj rzeczy, których juz nie chcesz</p>
              <p>POTRZEBUJĄCYM</p>
            </div>
            <div className="decoration-div">
              <Decoration />
            </div>
          </div>
          <div className="form-header-steps-section">
            <div>
              <div className="form-header-steps-section-header">
                Wystarczą 4 proste kroki:
              </div>
              <div className="rhombus-section">
                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">1</p>
                  <div className="rhombus-child-text">
                    <p>Wybierz rzeczy</p>
                  </div>
                </div>

                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">2</p>
                  <div className="rhombus-child-text">
                    <p>Spakuj je w worki</p>
                  </div>
                </div>

                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">3</p>
                  <div className="rhombus-child-text">
                    <p>Wybierz fundację</p>
                  </div>
                </div>

                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">4</p>
                  <div className="rhombus-child-text">
                    <p>Zamów kuriera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Questionnaire />
      <ContactUs />
    </div>
  );
};
