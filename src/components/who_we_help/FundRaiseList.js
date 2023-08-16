import React from "react";
import { BeneficientsElement } from "../beneficients/BeneficientsElement";

export const FundRaiseList = () => {
  return (
    <>
      <BeneficientsElement
        beneficientsName="Raise “Lorem Ipsum 1”"
        beneficientsTarget="Quis varius quam quisque id diam vel quam elementum pulvinar."
        beneficientsNeeds="Egestas, sed, tempus"
      />
      <BeneficientsElement
        beneficientsName="Raise “Lorem Ipsum 2"
        beneficientsTarget="Hendrerit gravida rutrum quisque non tellus orci ac auctor augue."
        beneficientsNeeds="Ut, aliquam, purus, sit, amet"
      />
      <BeneficientsElement
        beneficientsName="Raise “Lorem Ipsum 3"
        beneficientsTarget="Scelerisque in dictum non consectetur a erat nam."
        beneficientsNeeds="Mi, quis, hendrerit, dolor"
      />
    </>
  );
};
