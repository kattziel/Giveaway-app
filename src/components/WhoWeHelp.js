import React, { useState, useEffect } from "react";
import "../scss/components_scss/WhoWeHelp.scss";
import { BeneficientsNumbering } from "./beneficients/BeneficientsNumbering";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { Element } from "react-scroll";
import { SectionButton } from "./who_we_help/SectionButton";
import { SectionDescription } from "./who_we_help/SectionDescription";
import { SectionList } from "./who_we_help/SectionList";

export default function WhoWeHelp() {
  const [activeSection, setActiveSection] = useState("foundation");
  const [activePagination, setActivePagination] = useState(1);

  useEffect(() => {
    setActivePagination(1);
  }, [activeSection]);

  return (
    <Element name="test3">
      <div className="whowehelp-container">
        <div className="whowehelp-first-section">
          <p>Komu pomagamy?</p>
          <Decoration />
        </div>

        <div className="whowehelp-second-section">
          
          <SectionButton
            onClick={(value) => setActiveSection(value)}
            activeSection={activeSection}
            sectionName="foundation"
          >
            <p>Fundacjom</p>
          </SectionButton>

          <SectionButton
            onClick={(value) => setActiveSection(value)}
            activeSection={activeSection}
            sectionName="organization"
          >
            <p>Organizacjom pozarządowym</p>
          </SectionButton>

          <SectionButton
            onClick={(value) => setActiveSection(value)}
            activeSection={activeSection}
            sectionName="fundRaise"
          >
            <p>Lokalnym zbiórkom</p>
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
