import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

import { IState } from './types/People';

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      age: 36,
      note: 'Basketball Player',
    },
  ]);

  people.map((person) => {
    person.age;
  });

  return (
    <div className="App">
      <h1>V I </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
