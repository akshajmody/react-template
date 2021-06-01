import React, { useState } from 'react';
import { IState as Props } from '../types/People';
import styles from '../App.module.css';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    url: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: '',
      age: '',
      url: '',
      note: '',
    });
  };

  return (
    <div className={styles['AddToList']}>
      <input
        type="text"
        placeholder="Name"
        className={styles['AddToList-input']}
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className={styles['AddToList-input']}
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className={styles['AddToList-input']}
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        placeholder="Notes"
        className={styles['AddToList-input']}
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className={styles['AddToList-btn']} onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
