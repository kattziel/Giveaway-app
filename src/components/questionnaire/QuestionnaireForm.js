import React from "react";

const QuestionnaireForm = () => {
  return (
      <div>
        <div className="form-steps-header">Zaznacz, co chcesz oddać:</div>
        <div className="form-steps-giveaway-options">
          <div className="form-steps-giveaway-picker">
            <label class="checkbox">
              <input type="checkbox" />
              <span></span>
              ubrania, które nadają się do ponownego uzycia
            </label>
            <label class="checkbox">
              <input type="checkbox" />
              <span></span>
              ubrania do wyrzucenia
            </label>
            <label class="checkbox">
              <input type="checkbox" />
              <span></span>
              zabawki
            </label>
            <label class="checkbox">
              <input type="checkbox" />
              <span></span>
              ksiązki
            </label>
            <label class="checkbox">
              <input type="checkbox" />
              <span></span>
              inne
            </label>
          </div>
        </div>
        <div className="form-steps-button">
          <button>Dalej</button>
        </div>
      </div>
  );
};

export default QuestionnaireForm;


{/* <div className="form-steps" - do usunięcia form steps>
<div className="form-steps-number">Krok 2/4</div>

<div className="form-steps-header">
  Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
</div>

<div className="dropdown-section">
  <div className="dropdown">
    <div className="dropdown-menu">
      <div className="dropdown-menu-title">
        <p>Liczba 60l worków:</p>
      </div>
      <div className="dropdown-menu-btn">
        <div className="dropdown-menu-text">
          <p>- wybierz - </p>
        </div>
        <div className="dropdown-menu-icon">
          <img src={require("../../assets/Icon-Arrow-Up.png")} />
        </div>
      </div>
    </div>
    <div className="dropdown-menu-content">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
    </div>
  </div>
</div>
</div> */}