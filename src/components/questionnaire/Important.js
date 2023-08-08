import React from "react";

const Important = ({ activeSection }) => {
  switch (activeSection) {
    case "giveaway-things":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Ważne!</div>
            <div className="form-details-content">
              Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
              wiedzieć, komu najlepiej je przekazać.
            </div>
          </div>
        </div>
      );

    case "packing-instructions":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Ważne!</div>
            <div className="form-details-content">
              Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną
              instrukcję, jak poprawnie spakować rzeczy, znajdziesz <a>TUTAJ</a>
            </div>
          </div>
        </div>
      );

    case "localization":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Ważne!</div>
            <div className="form-details-content">
              Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji
              w wyszukiwarce. Możesz też filtrować organizacje po ich
              lokalizacji bądź celu ich pomocy.
            </div>
          </div>
        </div>
      );

    case "pickup":
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Ważne!</div>
            <div className="form-details-content">
              Podaj adres oraz termin odbioru rzeczy.
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="form-details">
          <div className="form-details-padding">
            <div className="form-details-header">Ważne!</div>
            <div className="form-details-content">
              Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
              wiedzieć, komu najlepiej je przekazać.
            </div>
          </div>
        </div>
      );
  }
};

export default Important;
