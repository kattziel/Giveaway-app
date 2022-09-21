import React from "react";
import { FoundationList } from "./FoundationList";
import { OrganizationList } from "./OrganizationList";
import { FundRaiseList } from "./FundRaiseList";

export const SectionList = ({ activeSection, activePagination }) => {
  console.log(activePagination);
  switch (activeSection) {
    case "foundation":
      return <FoundationList activePagination={activePagination} />;
    case "organization":
      return <OrganizationList activePagination={activePagination} />;
    default:
      return <FundRaiseList activePagination={activePagination} />;
  }
};
