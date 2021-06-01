import React, { useState, useEffect } from 'react';
import './Stepper.css';
import { StepProps as Props } from '../types/StepperProps';

interface StepState {
  description: string;
  completed: boolean;
  selected: boolean;
  highlighted: boolean;
}

const Stepper: React.FC<Props> = ({ steps, currentStepNumber }) => {
  const [stepState, setStepState] = useState<StepState[]>([]);

  useEffect(() => {
    let createSteps = steps.map((step, idx) => ({
      description: step,
      completed: idx < currentStepNumber - 1,
      selected: idx <= currentStepNumber - 1,
      highlighted: idx === currentStepNumber - 1,
    }));

    setStepState(createSteps);
  }, [steps, currentStepNumber]);

  return (
    <div className="stepper-wrapper-horizontal">
      {stepState.map(
        ({ selected, completed, highlighted, description }, idx) => (
          <div className="step-wrapper" key={idx}>
            <div
              className={`step-number step-number-${
                selected ? 'active' : 'disabled'
              }`}
            >
              {completed ? '✔' : idx + 1}
            </div>
            <div
              className={`step-description ${
                highlighted ? 'step-description-active' : ''
              }`}
            >
              {description}
            </div>
            {idx + 1 !== stepState.length && (
              <div
                className={`divider-line divider-line-${stepState.length}`}
              ></div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Stepper;
