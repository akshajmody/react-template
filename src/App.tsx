import React, { useState } from 'react';
import styles from './App.module.css';
import AddToList from './components/AddToList';
import List from './components/List';
import Stepper from './components/Stepper';

import { IState } from './types/People';
import { StepProps } from './types/StepperProps';

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Basketball Player',
    },
  ]);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepsArray = ['test', 'test', 'test', 'test', 'test'];

  const handleClick = (clickType?: string): void => {
    let newStep = currentStep;
    clickType === 'next' ? newStep++ : newStep--;
    if (newStep > 0 && newStep <= 5) {
      setCurrentStep(newStep);
    }
  };

  return (
    <div className={styles.App}>
      <h1>V I </h1>
      <div className={styles['stepper-container-horizontal']}>
        <Stepper currentStepNumber={currentStep} steps={stepsArray} />
      </div>
      <List people={people} setPeople={setPeople} />
      <AddToList people={people} setPeople={setPeople} />
      <div className={styles['buttons-container']}>
        <button onClick={() => handleClick()}>Previous</button>
        <button onClick={() => handleClick('next')}>Next</button>
      </div>
    </div>
  );
}

export default App;
