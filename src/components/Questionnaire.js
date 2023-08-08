import React, { useState, useEffect } from "react";
import Important from "./questionnaire/Important";
import Steps from "./questionnaire/Steps";
import QuestionnaireForm from "./questionnaire/QuestionnaireForm";
import QuestionnaireControl from "./questionnaire/QuestionnaireControl";

const Questionnaire = () => {
  const [activeSection, setActiveSection] = useState("giveaway-things");
  // const [activeSection, setActiveSection] = useState("packing-instructions");
  // const [activeSection, setActiveSection] = useState("localization");
  // const [activeSection, setActiveSection] = useState("pickup");

  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };

  // useEffect(() => {
  //   setActiveSection("giveaway-things");
  // }, []);
  // check whether you will be using it

  return (
    <>
      <Important activeSection={activeSection} />
      <div className="form-steps form-steps-flex">
        <Steps activeSection={activeSection} />
        <QuestionnaireForm
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        {/* <QuestionnaireControl activeSection={activeSection}/> */}
      </div>
    </>
  );
};

export default Questionnaire;
