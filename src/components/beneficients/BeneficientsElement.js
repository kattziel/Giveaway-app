import React from "react";

export const BeneficientsElement = (props) => {
  const { beneficientsName, beneficientsTarget, beneficientsNeeds } = props;
  return (

    <div>

        <div className="beneficients-section-content">
            <div className="beneficients-data">
                <div className="beneficients-name">{beneficientsName}</div>
                <div className="beneficients-target">{beneficientsTarget}</div>
            </div>
            <div className="beneficients-needs">
                {beneficientsNeeds}
            </div>
        </div>

        {/* <div className="beneficients-section-line">
        </div> */}

    </div>

    // <div className="simple-steps-steps">
    //   <div>
    //     <img className="single-steps-img" src={require(`../../assets/${imageName}`)} alt="" />
    //     <p className="simple-steps-headings">{title}</p>
    //     <div className="simple-steps-line"/>
    //     <p>{description}</p>
    //   </div>
    // </div>
  );
};
