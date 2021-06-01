import React, { useState, useEffect } from 'react';
import styles from './Stepper.module.css';
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
    <div className={styles['stepper-wrapper-horizontal']}>
      {stepState.map(
        ({ selected, completed, highlighted, description }, idx) => (
          <div className={styles['step-wrapper']} key={idx}>
            <div
              className={[
                styles['step-number'],
                styles[`step-number-${selected ? 'active' : 'disabled'}`],
              ].join(' ')}
              style={{ background: `${highlighted ? 'orange' : 'white'}` }}
            >
              {completed ? '✔' : idx + 1}
            </div>
            <div
              className={[
                styles['step-description'],
                `${highlighted ? styles['step-description-active'] : ''}`,
              ].join(' ')}
            >
              {description}
            </div>
            {idx + 1 !== stepState.length && (
              <div
                className={[
                  styles['divider-line'],
                  styles[`divider-line-${stepState.length}`],
                ].join(' ')}
              ></div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Stepper;
