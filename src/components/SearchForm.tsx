import React, { useState } from 'react';
import { SearchState } from '../types/SearchForm';
import styles from '../App.module.css';

const SearchForm: React.FC<{}> = () => {
  const [input, setInput] = useState<SearchState>({
    company: '',
    address1: '',
    address2: '',
    identifier: '',
  });
  const [selected, setSelected] = useState(false);

  const handleClick = (): void => {
    if (
      !input.company ||
      !input.address1 ||
      !input.address2 ||
      !input.identifier
    ) {
      return;
    }
    setSelected(true);
    setInput({
      company: '',
      address1: '',
      address2: '',
      identifier: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles['AddToList']}>
      {selected && <div>FORM SUBMITTED</div>}
      <input
        type="text"
        placeholder="Company"
        className={styles['AddToList-input']}
        value={input.company}
        onChange={handleChange}
        name="company"
      />
      <input
        type="text"
        placeholder="Address1"
        className={styles['AddToList-input']}
        value={input.address1}
        onChange={handleChange}
        name="address1"
      />
      <input
        type="text"
        placeholder="Address2"
        className={styles['AddToList-input']}
        value={input.address2}
        onChange={handleChange}
        name="address2"
      />
      <input
        type="text"
        placeholder="Identifier"
        className={styles['AddToList-input']}
        value={input.identifier}
        onChange={handleChange}
        name="identifier"
      />
      <button className={styles['AddToList-btn']} onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default SearchForm;
