import React from 'react';
import { IState as IProps } from '../types/People';

interface ListType {
  people: IProps['people'];
  setPeople: React.Dispatch<React.SetStateAction<IProps['people']>>;
}

const List: React.FC<ListType> = ({ people, setPeople }) => {
  const remove = (user: string): void => {
    let allPeople = [...people];
    let pos = allPeople
      .map(function (e) {
        return e.name;
      })
      .indexOf(user);
    allPeople.splice(pos, 1);
    setPeople(allPeople);
  };

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
          <button onClick={() => remove(person.name)}>Delete</button>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
