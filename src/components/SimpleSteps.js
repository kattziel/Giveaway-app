//general
import React from "react";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { SimpleStepColumn } from "./simple_steps/SimpleStepColumn";
import { Element } from "react-scroll";

//styles
import "./../scss/components_scss/SimpleSteps.scss";

export default function SimpleSteps() {
  return (
    <Element name="test1">
      <div className="simple-steps-container" id="scroll-simple-steps">
        <div className="simple-steps-first-container">
          <div>
            <div className="simple-steps-first-container-text">
              Wystarczą 4 proste kroki
            </div>
            <div className="simple-steps-first-container-decoration">
              <Decoration />
            </div>
          </div>
        </div>

        <div className="simple-steps-second-container">
          <div className="simple-steps-second-container-margins">
            <SimpleStepColumn
              description="ubrania, zabawki, sprzet i inne"
              title="Wybierz rzeczy"
              imageName="Icon-1.png"
            />
            <SimpleStepColumn
              description="skorzystaj z worków na śmieci"
              title="Spakuj je"
              imageName="Icon-2.png"
            />
            <SimpleStepColumn
              description="wybierz zaufane miejsce"
              title="Zdecyduj, komu chcesz pomóc"
              imageName="Icon-3.png"
            />
            <SimpleStepColumn
              description="kurier przyjdzie w dogodnym terminie"
              title="Zamów kuriera"
              imageName="Icon-4.png"
            />
          </div>
        </div>

        <div className="simple-steps-third-container">
          <div>
            <button className="btn">
              ODDAJ <br />
              RZECZY
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}
