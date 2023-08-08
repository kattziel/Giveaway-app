import React, { useState } from "react";
import Important from "./questionnaire/Important";
import Steps from "./questionnaire/Steps";
import QuestionnaireForm from "./questionnaire/QuestionnaireForm";
import QuestionnaireControl from "./questionnaire/QuestionnaireControl";

const Questionnaire = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <Important />
      <div className="form-steps form-steps-flex">
        <Steps />
        <QuestionnaireForm />
        <QuestionnaireControl/>
      </div>
    </>
  );
};

export default Questionnaire;
