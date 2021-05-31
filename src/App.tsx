import React, { useState } from 'react';
import './App.css';

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([]);

  people.map((person) => {
    person.age;
  });

  return (
    <div className="App">
      <h1>V I </h1>
    </div>
  );
}

export default App;
