import React from "react";

export const BeneficientsNumbering = (props) => {
  const { pageNumber } = props;
  return (
  <div className="beneficients-number">{pageNumber}</div>
  );
};
