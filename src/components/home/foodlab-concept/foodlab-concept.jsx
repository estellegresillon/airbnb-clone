import React from "react";

import { CONCEPT_STEPS } from "../../../constants/concept-steps";

const FoodlabConcept = ({ conceptContainer }) => (
  <div className="home-foodlab-concept" ref={conceptContainer}>
    {CONCEPT_STEPS.map(step => {
      return (
        <div key={step.nb} className={`home-concept-step home-step-${step.nb}`}>
          <img src={step.src} alt={step.nb}></img>
          <div className="home-concept-description"><span>{step.description}</span></div>
        </div>
      )
    })}
  </div>
);

export default FoodlabConcept;
