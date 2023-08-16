import React, { useState } from "react";
import QuestionnaireControl from "./QuestionnaireControl";

const QuestionnaireForm = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectValue = (number) => {
    setSelectedValue(number);
    setIsOpen(false);
  };

  const sectionChangeHandler = (activeSection) => {
    onSectionChange(activeSection);
  };

  switch (activeSection) {
    case "giveaway-things":
      return (
        <>
          <div className="questionnaire-content">
            <div className="form-steps-header">
              Tick ​​what you want to give back:
            </div>
            <div className="form-steps-giveaway-options">
              <div className="form-steps-giveaway-picker">
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  clothes that are reusable
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  clothes to throw away
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  toys
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  books
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  others
                </label>
              </div>
            </div>
          </div>
          <QuestionnaireControl
            activeSection="giveaway-things"
            sectionChange={sectionChangeHandler}
          />
        </>
      );

    case "packing-instructions":
      return (
        <>
          <div className="questionnaire-content">
            <div className="form-steps-header">
              Enter the number of 60l bags in which you packed your items:
            </div>
            <div className="dropdown-section">
              <div className="dropdown">
                <div className="dropdown-menu" onClick={toggleDropdown}>
                  <div className="dropdown-menu-title">
                    <p>Number of 60l bags:</p>
                  </div>
                  <div className="dropdown-menu-btn">
                    <div className="dropdown-menu-text">
                      <p>
                        {selectedValue !== null ? selectedValue : "- choose -"}
                      </p>
                    </div>
                    <div className="dropdown-menu-icon">
                      <img
                        src={require("../../assets/Icon-Arrow-Up.png")}
                        style={{
                          width: "40px",
                          height: "40px",
                        }}
                        alt="Arrow up"
                      />
                    </div>
                  </div>
                </div>
                <div className="dropdown-menu-content">
                  <button onClick={() => selectValue("1")}>1</button>
                  <button onClick={() => selectValue("2")}>2</button>
                  <button onClick={() => selectValue("3")}>3</button>
                  <button onClick={() => selectValue("4")}>4</button>
                  <button onClick={() => selectValue("5")}>5</button>
                </div>
              </div>
            </div>
          </div>
          <QuestionnaireControl
            activeSection="packing-instructions"
            sectionChange={sectionChangeHandler}
          />
        </>
      );

    case "localization":
      return (
        <QuestionnaireControl
          activeSection="localization"
          sectionChange={sectionChangeHandler}
        />
      );

    case "pickup":
      return (
        <QuestionnaireControl
          activeSection="pickup"
          sectionChange={sectionChangeHandler}
        />
      );

    default:
      return (
        <>
          <div className="questionnaire-content">
            <div className="form-steps-header">Zaznacz, co chcesz oddać:</div>
            <div className="form-steps-giveaway-options">
              <div className="form-steps-giveaway-picker">
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  ubrania, które nadają się do ponownego uzycia
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  ubrania do wyrzucenia
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  zabawki
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  ksiązki
                </label>
                <label class="checkbox">
                  <input type="checkbox" />
                  <span></span>
                  inne
                </label>
              </div>
            </div>
          </div>
          <div className="form-steps-buttons">
            <button className="next-btn">Dalej</button>
          </div>
        </>
      );
  }
};

export default QuestionnaireForm;
