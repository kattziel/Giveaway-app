import React, { useState } from "react";
import Important from "./questionnaire/Important";
import Steps from "./questionnaire/Steps";
import QuestionnaireForm from "./questionnaire/QuestionnaireForm";
import QuestionnaireControl from "./questionnaire/QuestionnaireControl";

const Questionnaire = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  return (
    <>
      <Important />
      <div className="form-steps">
        <Steps />
        <QuestionnaireForm />
      </div>
    </>
  );
};

export default Questionnaire;
