import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

import "../scss/components_scss/Form.scss";

import Questionnaire from "./Questionnaire";
import ContactUs from "./Contact";

export const Form = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div>
      <div className="form-header">
        <div className="form-header-img-section">
          <img
            src={require("../assets/Form-Hero-Image.jpg")}
            alt="sweaterimage"
          />
        </div>

        <div className="form-header-content-section">
          <div className="form-header-header-section">
            <div className="header-div">
              <p>Give away the items you no longer need</p>
              <p>TO THE PEOPLE IN NEED </p>
            </div>
            <div className="decoration-div">
              <Decoration />
            </div>
          </div>
          <div className="form-header-steps-section">
            <div>
              <div className="form-header-steps-section-header">
                Watch these 4 simple steps:
              </div>
              <div className="rhombus-section">
                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">1</p>
                  <div className="rhombus-child-text">
                    <p>Pick items</p>
                  </div>
                </div>

                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">2</p>
                  <div className="rhombus-child-text">
                    <p>Pack them into bags</p>
                  </div>
                </div>

                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">3</p>
                  <div className="rhombus-child-text">
                    <p>Choose a fundation</p>
                  </div>
                </div>

                <div className="rhombus-parent">
                  <div className="rhombus-child"></div>
                  <p className="rhombus-child-number">4</p>
                  <div className="rhombus-child-text">
                    <p>Order a delivery man</p>
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
