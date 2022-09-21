import React from "react";
import { BeneficientsElement } from "../beneficients/BeneficientsElement";

export const OrganizationList = ({ activePagination }) => {
  switch (activePagination) {
    case 1:
      return <Page1 />;
    default:
      return <Page2 />;
  }
};

const Page1 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Organizacja “Lorem Ipsum 1”"
      beneficientsTarget="Quis varius quam quisque id diam vel quam elementum pulvinar."
      beneficientsNeeds="Egestas, sed, tempus"
    />
    <BeneficientsElement
      beneficientsName="Organizacja “Lorem Ipsum 2"
      beneficientsTarget="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
      beneficientsNeeds="Ut, aliquam, purus, sit, amet"
    />
    <BeneficientsElement
      beneficientsName="Organizacja “Lorem Ipsum 3"
      beneficientsTarget="Scelerisque in dictum non consectetur a erat nam."
      beneficientsNeeds="Mi, quis, hendrerit, dolor"
    />
  </div>
);

const Page2 = () => (
  <div>
    <BeneficientsElement
      beneficientsName="Organizacja “Lorem Ipsum 4”"
      beneficientsTarget="Quis varius quam quisque id diam vel quam elementum pulvinar."
      beneficientsNeeds="Egestas, sed, tempus"
    />
    <BeneficientsElement
      beneficientsName="Organizacja “Lorem Ipsum 5"
      beneficientsTarget="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
      beneficientsNeeds="Ut, aliquam, purus, sit, amet"
    />
    <BeneficientsElement
      beneficientsName="Organizacja “Lorem Ipsum 6"
      beneficientsTarget="Scelerisque in dictum non consectetur a erat nam."
      beneficientsNeeds="Mi, quis, hendrerit, dolor"
    />
  </div>
);
