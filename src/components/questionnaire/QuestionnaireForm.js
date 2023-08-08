import React, { useState } from "react";

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

  switch (activeSection) {
    case "giveaway-things":
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
            <button
              className="next-btn"
              onClick={() => onSectionChange("packing-instructions")}
            >
              Dalej
            </button>
          </div>
        </>
      );

    case "packing-instructions":
      return (
        <>
          <div className="questionnaire-content">
            <div className="form-steps-header">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </div>
            <div className="dropdown-section">
              <div className="dropdown">
                <div className="dropdown-menu" onClick={toggleDropdown}>
                  <div className="dropdown-menu-title">
                    <p>Liczba 60l worków:</p>
                  </div>
                  <div className="dropdown-menu-btn">
                    <div className="dropdown-menu-text">
                      <p>
                        {selectedValue !== null ? selectedValue : "- wybierz -"}
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
          <div className="form-steps-buttons">
            <button
              className="next-btn"
              onClick={() => onSectionChange("giveaway-things")}
            >
              Powrót
            </button>
            <button
              className="next-btn"
              onClick={() => onSectionChange("localization")}
            >
              Dalej
            </button>
          </div>
        </>
      );

    case "localization":
      return (
        <div className="form-steps-buttons">
          <button
            className="next-btn"
            onClick={() => onSectionChange("packing-instructions")}
          >
            Powrót
          </button>
          <button
            className="next-btn"
            onClick={() => onSectionChange("pickup")}
          >
            Dalej
          </button>
        </div>
      );

    case "pickup":
      return (
        <div className="form-steps-buttons">
          <button
            className="next-btn"
            onClick={() => onSectionChange("localization")}
          >
            Powrót
          </button>
        </div>
      );

    default:
      // return (
      //   <div className="questionnaire-content">
      //     <div className="form-steps-header">
      //       Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      //     </div>
      //     <div className="dropdown-section">
      //       <div className="dropdown">
      //         <div className="dropdown-menu">
      //           <div className="dropdown-menu-title">
      //             <p>Liczba 60l worków:</p>
      //           </div>
      //           <div className="dropdown-menu-btn">
      //             <div className="dropdown-menu-text">
      //               <p>
      //                 {selectedValue !== null ? selectedValue : "- wybierz -"}
      //               </p>
      //             </div>
      //             <div className="dropdown-menu-icon">
      //               <img
      //                 src={require("../../assets/Icon-Arrow-Up.png")}
      //                 style={{
      //                   width: "40px",
      //                   height: "40px",
      //                 }}
      //                 alt="Arrow up"
      //               />
      //             </div>
      //           </div>
      //         </div>
      //         <div className="dropdown-menu-content">
      //           <button onClick={() => selectValue("1")}>1</button>
      //           <button onClick={() => selectValue("2")}>2</button>
      //           <button onClick={() => selectValue("3")}>3</button>
      //           <button onClick={() => selectValue("4")}>4</button>
      //           <button onClick={() => selectValue("5")}>5</button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // );

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
