import React from "react";

const QuestionnaireForm = ({ activeSection }) => {
  switch (activeSection) {
    case "giveaway-things":
      return (
        <div className="questionnaire-content">
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
        </div>
      );

    case "packing-instructions":
      return (
        <div className="questionnaire-content">
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
        </div>
      );

    case "localization":
      return <div className="form-steps-number">Krok 3/4</div>;

    case "pickup":
      return <div className="form-steps-number">Krok 4/4</div>;

    default:
      return (
        <div className="questionnaire-content">
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
                    <img
                      src={require("../../assets/Icon-Arrow-Up.png")}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                      alt="Arrow up"
                    />
                  </div>
                </div>
              </div>
              <div className="dropdown-menu-content">
                <button onClick={(e) => e.preventDefault()}>1</button>
                <button onClick={(e) => e.preventDefault()}>2</button>
                <button onClick={(e) => e.preventDefault()}>3</button>
                <button onClick={(e) => e.preventDefault()}>4</button>
                <button onClick={(e) => e.preventDefault()}>5</button>
              </div>
            </div>
          </div>
        </div>
      );

    // return (
    //   <div className="questionnaire-content">
    //       <div className="form-steps-header">Zaznacz, co chcesz oddać:</div>
    //       <div className="form-steps-giveaway-options">
    //         <div className="form-steps-giveaway-picker">
    //           <label class="checkbox">
    //             <input type="checkbox" />
    //             <span></span>
    //             ubrania, które nadają się do ponownego uzycia
    //           </label>
    //           <label class="checkbox">
    //             <input type="checkbox" />
    //             <span></span>
    //             ubrania do wyrzucenia
    //           </label>
    //           <label class="checkbox">
    //             <input type="checkbox" />
    //             <span></span>
    //             zabawki
    //           </label>
    //           <label class="checkbox">
    //             <input type="checkbox" />
    //             <span></span>
    //             ksiązki
    //           </label>
    //           <label class="checkbox">
    //             <input type="checkbox" />
    //             <span></span>
    //             inne
    //           </label>
    //         </div>
    //       </div>
    //     </div>
    //   );
  }
};

export default QuestionnaireForm;

// const QuestionnaireForm = () => {
// return (
//     <div>
//       <div className="form-steps-header">Zaznacz, co chcesz oddać:</div>
//       <div className="form-steps-giveaway-options">
//         <div className="form-steps-giveaway-picker">
//           <label class="checkbox">
//             <input type="checkbox" />
//             <span></span>
//             ubrania, które nadają się do ponownego uzycia
//           </label>
//           <label class="checkbox">
//             <input type="checkbox" />
//             <span></span>
//             ubrania do wyrzucenia
//           </label>
//           <label class="checkbox">
//             <input type="checkbox" />
//             <span></span>
//             zabawki
//           </label>
//           <label class="checkbox">
//             <input type="checkbox" />
//             <span></span>
//             ksiązki
//           </label>
//           <label class="checkbox">
//             <input type="checkbox" />
//             <span></span>
//             inne
//           </label>
//         </div>
//       </div>
//     </div>
// );
// };

// export default QuestionnaireForm;

{
  /* <div className="form-steps" - do usunięcia form steps>
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
</div> */
}
