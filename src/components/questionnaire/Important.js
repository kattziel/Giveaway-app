import React from "react";

const Important = ({ activeSection }) => {
  switch (activeSection) {
    case "giveaway-things":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Important!</div>
            <div className="form-details-content">
              Fill in the details of your belongings. This will help us to know
              to whom it is best to give them.
            </div>
          </div>
        </div>
      );

    case "packing-instructions":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Important!</div>
            <div className="form-details-content">
              Pack all items to be donated in 60l bags. Detailed instructions on
              how to properly pack things can be found <a>HERE</a>
            </div>
          </div>
        </div>
      );

    case "localization":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Important!</div>
            <div className="form-details-content">
              If you know who you want to help, you can enter the name of that
              organization in the search engine. You can also filter
              organizations by their location or purpose.
            </div>
          </div>
        </div>
      );

    case "pickup":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Important!</div>
            <div className="form-details-content">
              Enter the address and pick-up date.
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Important!</div>
            <div className="form-details-content">
              Fill in the details of your belongings. This will help us to know
              to whom it is best to give them.
            </div>
          </div>
        </div>
      );
  }
};

export default Important;
