import React, { useState } from "react";
import "../scss/components_scss/Contact.scss";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { Element } from "react-scroll";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let submitMessageAlert;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields by resetting state
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Element name="test4">
      <div className="contact-container">
        <div className="image-section">
          <img src={require("./../assets/Background-Contact-Form.jpg")} />
        </div>

        <form className="contact-form-section" onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>

              <div>
                <div className="contact-data-personal">Wpisz swój email</div>
                <input
                  id="submit-text"
                  type="text"
                  className="contact-form-text"
                  placeholder="abc@xyz.pl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="submit-button-div">
          <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </Element>
  );
}
