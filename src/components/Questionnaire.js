import React, { useState, useEffect } from "react";
import Important from "./questionnaire/Important";
import Steps from "./questionnaire/Steps";
import QuestionnaireForm from "./questionnaire/QuestionnaireForm";

const Questionnaire = () => {
  const [activeSection, setActiveSection] = useState("giveaway-things");

  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };

  return (
    <>
      <Important activeSection={activeSection} />
      <div className="form-steps form-steps-flex">
        <Steps activeSection={activeSection} />
        <QuestionnaireForm
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
    </>
  );
};

export default Questionnaire;
