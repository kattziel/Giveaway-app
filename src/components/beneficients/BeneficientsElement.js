import React from "react";

export const BeneficientsElement = ({
  beneficientsName,
  beneficientsTarget,
  beneficientsNeeds,
}) => {
  return (
    <div className="beneficient">
      <div className="beneficients-section-content">
        <div className="beneficients-data">
          <div className="beneficients-name">{beneficientsName}</div>
          <div className="beneficients-target">{beneficientsTarget}</div>
        </div>
        <div className="beneficients-needs">{beneficientsNeeds}</div>
      </div>
    </div>
  );
};
