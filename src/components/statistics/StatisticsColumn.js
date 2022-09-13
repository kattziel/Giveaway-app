import React from "react";

export const StatisticsColumn = (props) => {
  const { statsNumber, statsTitle, statsDescription } = props;
  return (
    <div className="stats-section">
      <div className="stats-number">{statsNumber}</div>
      <div className="stats-title">{statsTitle}</div>
      <div className="stats-description">{statsDescription}</div>
    </div>
  );
};