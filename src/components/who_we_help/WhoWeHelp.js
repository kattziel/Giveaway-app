import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { ReactComponent as Decoration } from "./../../assets/Decoration.svg";
import "../../scss/components_scss/WhoWeHelp.scss";

import { BeneficientsNumbering } from "../beneficients/BeneficientsNumbering";
import { SectionButton } from "./SectionButton";
import { SectionDescription } from "./SectionDescription";
import { SectionList } from "./SectionList";

export default function WhoWeHelp() {
  const [activeSection, setActiveSection] = useState("foundation");
  const [activePagination, setActivePagination] = useState(1);

  useEffect(() => {
    setActivePagination(1);
  }, [activeSection]);

  return (
    <Element name="test3">
      {/* relevant to scroll down from header section on the top of the page */}

      <div className="whowehelp-container">
        <div className="whowehelp-first-section">
          <p>Who do we help?</p>
          <Decoration />
        </div>




        <div className="whowehelp-second-section">

          <SectionButton
            onClick={(value) => setActiveSection(value)}
            activeSection={activeSection}
            sectionName="foundation"
          >
            <p>Foundations</p>
          </SectionButton>

          <SectionButton
            onClick={(value) => setActiveSection(value)}
            activeSection={activeSection}
            sectionName="organization"
          >
            <p>Non-governmental organisations</p>
          </SectionButton>

          <SectionButton
            onClick={(value) => setActiveSection(value)}
            activeSection={activeSection}
            sectionName="fundRaise"
          >
            <p>Local raises</p>
          </SectionButton>
        </div>





        <div className="whowehelp-third-section">
          <SectionDescription activeSection={activeSection} />
        </div>





        <div className="whowehelp-fourth-section">
          <SectionList
            activeSection={activeSection}
            activePagination={activePagination}
          />
        </div>
        <div className="whowehelp-numbering">
          {activeSection === "foundation" ? (
            <>
              <BeneficientsNumbering
                activePagination={activePagination}
                onClick={(value) => setActivePagination(value)}
                pageNumber="1"
              />
              <BeneficientsNumbering
                activePagination={activePagination}
                onClick={(value) => setActivePagination(value)}
                pageNumber="2"
              />
              <BeneficientsNumbering
                activePagination={activePagination}
                onClick={(value) => setActivePagination(value)}
                pageNumber="3"
              />
            </>
          ) : null}

          {activeSection === "organization" ? (
            <>
              <BeneficientsNumbering
                activePagination={activePagination}
                onClick={(value) => setActivePagination(value)}
                pageNumber="1"
              />
              <BeneficientsNumbering
                activePagination={activePagination}
                onClick={(value) => setActivePagination(value)}
                pageNumber="2"
              />
            </>
          ) : null}
        </div>
      </div>
    </Element>
  );
}
