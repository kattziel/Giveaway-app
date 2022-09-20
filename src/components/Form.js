import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { Link } from "react-router-dom";

import "../scss/components_scss/Form.scss";

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
      {/* 1- form header */}
      <div className="form-header">
        <div className="form-header-img-section">
          <img src={require("../assets/Form-Hero-Image.jpg")} />
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

      {/* 2- form details */}
      <div className="form-details">
        <div className="form-details-padding">
          <div className="form-details-header">Wazne!</div>
          <div className="form-details-content">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć, komu najlepiej je przekazać.
          </div>
        </div>
      </div>

      {/* 3 - form steps */}
      <div className="form-steps">
        <div className="form-steps-number">Krok 1/4</div>
        <div className="form-steps-header">Zaznacz, co chcesz oddać:</div>
        <div className="form-steps-giveaway-options">
          <div className="form-steps-giveaway-picker">

            <label class="checkbox">
              <input type="radio" />
              <span></span>
              ubrania, które nadają się do ponownego uzycia
            </label>
            <label class="checkbox">
              <input type="radio" />
              <span></span>
            ubrania do wyrzucenia
            </label>
            <label class="checkbox">
              <input type="radio" />
              <span></span>
              zabawki
            </label>
            <label class="checkbox">
              <input type="radio" />
              <span></span>
              ksiązki
            </label>
            <label class="checkbox">
              <input type="radio" />
              <span></span>
              inne
            </label>
          </div>
        </div>
        <div className="form-steps-button">
          <button>Dalej</button>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};
