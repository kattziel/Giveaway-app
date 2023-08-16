//general
import React from "react";
import { ReactComponent as Decoration } from "./../assets/Decoration.svg";
import { SimpleStepColumn } from "./simple_steps/SimpleStepColumn";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

//styles
import "./../scss/components_scss/SimpleSteps.scss";

export default function SimpleSteps() {
  return (
    <Element name="test1">
      <div className="simple-steps-container" id="scroll-simple-steps">
        <div className="simple-steps-first-container">
          <div>
            <div className="simple-steps-first-container-text">
              Watch these 4 simple steps
            </div>
            <div className="simple-steps-first-container-decoration">
              <Decoration />
            </div>
          </div>
        </div>

        <div className="simple-steps-second-container">
          <div className="simple-steps-second-container-margins">
            <SimpleStepColumn
              description="clothes, toys, equipment and more"
              title="Pick items"
              imageName="Icon-1.png"
            />
            <SimpleStepColumn
              description="use garbage bags"
              title="Pack them"
              imageName="Icon-2.png"
            />
            <SimpleStepColumn
              description="choose a trusted place"
              title="Decide who you want to help"
              imageName="Icon-3.png"
            />
            <SimpleStepColumn
              description="delivery man will come at a convenient time"
              title="Order a delivery man"
              imageName="Icon-4.png"
            />
          </div>
        </div>

        <div className="simple-steps-third-container">
          <div>
            <Link to="login">
              <button className="btn">
                GIVE AWAY <br />
                ITEMS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
}
