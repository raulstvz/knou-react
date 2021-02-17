import React from "react";
import "./Stepper.css";

const Stepper = ({ steps, currentStep }) => {
  
  const content = []
  const stepsToRender = steps

  for (var i = 0; i < stepsToRender; i++) {
    content.push(
      <div className="notCurrentStep" />
    )
  }
  content.splice(currentStep, 1, <div className="currentStep" />);
  return (
    <>
      <div className="stepper__container">
        {content} 
      </div>
    </>
  );
};

export default Stepper;