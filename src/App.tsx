import React, { useState } from 'react';
import styles from './App.module.css';
import AddToList from './components/AddToList';
import List from './components/List';
import Stepper from './components/Stepper';
import SearchForm from './components/SearchForm';
import { IState } from './types/People';
import { StepProps } from './types/StepperProps';

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Alex Mody',
      url: 'https://avatars.githubusercontent.com/u/60197033?v=4',
      age: 1000,
      note: 'Software Engineer',
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
      <SearchForm />
      <div className={styles['buttons-container']}>
        <button onClick={() => handleClick()}>Previous</button>
        <button onClick={() => handleClick('next')}>Next</button>
      </div>
    </div>
  );
}

export default App;
