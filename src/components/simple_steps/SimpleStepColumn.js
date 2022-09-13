import React from "react";

export const SimpleStepColumn = (props) => {
  const { imageName, title, description } = props;
  return (
    <div className="simple-steps-steps">
      <div>
        <img className="single-steps-img" src={require(`../../assets/${imageName}`)} alt="" />
        <p className="simple-steps-headings">{title}</p>
        <div className="simple-steps-line"/>
        <p>{description}</p>
      </div>
    </div>
  );
};
