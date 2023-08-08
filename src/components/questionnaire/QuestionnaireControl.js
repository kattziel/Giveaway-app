import React from "react";

const QuestionnaireControl = ({ activeSection }) => {
  switch (activeSection) {
    case "giveaway-things":
      return (
        <div className="form-steps-buttons">
          <button className="next-btn">Dalej</button>
        </div>
      );

    case "packing-instructions":
      return (
        <div className="form-steps-buttons">
          <button className="back-btn">Wstecz</button>
          <button className="next-btn">Dalej</button>
        </div>
      );

    case "localization":
      return (
        <div className="form-steps-buttons">
          <button className="back-btn">Wstecz</button>
          <button className="next-btn">Dalej</button>
        </div>
      );

    case "pickup":
      return (
        <div className="form-steps-buttons">
          <button className="back-btn">Wstecz</button>
          <button className="next-btn">Dalej</button>
        </div>
      );

    default:
      return (
        <div className="form-steps-buttons">
          <button className="next-btn">Dalej</button>
        </div>
      );
  }
};

export default QuestionnaireControl;
