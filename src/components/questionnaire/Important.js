import React from "react";

const Important = () => {
  return (
    <>
      <div className="form-details">
        <div className="form-details-padding">
          <div className="form-details-header">Ważne!</div>
          <div className="form-details-content">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć, komu najlepiej je przekazać.
          </div>
        </div>
      </div>

      <div className="form-details">
        <div className="form-details-padding">
          <div className="form-details-header">Wazne!</div>
          <div className="form-details-content">
            Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
            instrukcję, jak poprawnie spakować rzeczy, znajdziesz <a>TUTAJ</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Important;
