import React from "react";

const Steps = ({ activeSection }) => {
  switch (activeSection) {
    case "giveaway-things":
      return <div className="form-steps-number">Step 1/4</div>;

    case "packing-instructions":
      return <div className="form-steps-number">Step 2/4</div>;

    case "localization":
      return <div className="form-steps-number">Step 3/4</div>;

    case "pickup":
      return <div className="form-steps-number">Step 4/4</div>;

    default:
      return <div className="form-steps-number">Step 1/4</div>;
  }
};

export default Steps;
