import React from "react";
import "../scss/components_scss/Contact.scss";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="image-section">
        <img src={require("./../assets/Background-Contact-Form.jpg")} />
      </div>

      <div className="contact-form-section">
        <div className="contact-form-header">
          <div>Skontaktuj się z nami</div>
          <Decoration />
        </div>

        <div className="contact-form">
          <div className="contact-data">
            <div>
              <div className="contact-data-personal">Wpisz swoje imię</div>
              <input
                id="submit-text"
                type="text"
                className="contact-form-text"
                placeholder="Krzysztof"
              ></input>
            </div>

            <div>
              <div className="contact-data-personal">Wpisz swój email</div>
              <input
                id="submit-text"
                type="text"
                className="contact-form-text"
                placeholder="abc@xyz.pl"
              ></input>
            </div>
          </div>

        <div className="contact-message">
          <div>Wpisz swoją wiadomość</div>
          <textarea
            id="submit-message"
            type="text"
            className="contact-form-text"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></textarea>
        </div>

        </div>
      </div>
    </div>
  );
}
