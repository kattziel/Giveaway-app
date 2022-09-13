//general
import { Link } from "react-router-dom";
import React from "react";
import { StatisticsColumn } from "./statistics/StatisticsColumn";

//styles
import "./../scss/components_scss/Statistics.scss"

export default function Statistics() {
  return (
      <div className="three-columns-container">
        <StatisticsColumn
        statsNumber="10"
        statsTitle="ODDANYCH WORKÓW"
        statsDescription="Lorem ipsum dolor sit amet. Ea quos amet sit rerum quisquam sit consequatur amet et officia quis et expedita culpa aut maxime accusamus. Aut officiis tempore et eaque nostrum et placeat fugiat ut nihil neque sed galisum nobis non accusamus vitae sit quidem pariatur."
        />
        <StatisticsColumn
        statsNumber="5"
        statsTitle="WSPARTYCH ORGANIZACJI"
        statsDescription="Lorem ipsum dolor sit amet. Ea quos amet sit rerum quisquam sit consequatur amet et officia quis et expedita culpa aut maxime accusamus. Aut officiis tempore et eaque nostrum et placeat fugiat ut nihil neque sed galisum nobis non accusamus vitae sit quidem pariatur."
        />
        <StatisticsColumn
        statsNumber="7"
        statsTitle="ZORGANIZOWANYCH ZBIÓREK"
        statsDescription="Lorem ipsum dolor sit amet. Ea quos amet sit rerum quisquam sit consequatur amet et officia quis et expedita culpa aut maxime accusamus. Aut officiis tempore et eaque nostrum et placeat fugiat ut nihil neque sed galisum nobis non accusamus vitae sit quidem pariatur."
        />
      </div>
      );
    };