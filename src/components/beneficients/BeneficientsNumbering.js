import React from "react";

export const BeneficientsNumbering = ({
  pageNumber,
  activePagination,
  onClick,
}) => {
  const pageNumberToNumber = +pageNumber;
  return (
    <div
      className={`beneficients-number ${
        pageNumberToNumber === activePagination ? "active" : undefined
      }`}
      onClick={() => onClick(pageNumberToNumber)}
    >
      {pageNumber}
    </div>
  );
};
