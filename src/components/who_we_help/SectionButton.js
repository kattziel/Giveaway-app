import React from "react";

export const SectionButton = ({
  onClick,
  activeSection,
  sectionName,
  children,
}) => (
  <div
    onClick={() => onClick(sectionName)}
    className={activeSection === sectionName ? "active" : ""}
  >
    {children}
  </div>
);
