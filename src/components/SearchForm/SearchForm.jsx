import { useState } from 'react';

import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const onInput = e => {
    setState({ query: e.target.value });
  };

  const onSubmitSearch = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ query: '' });
  };

  return (
    <>
      <form onSubmit={onSubmitSearch} className={s.form}>
        <input
          onChange={onInput}
          type="text"
          placeholder="Let's find some movies"
          value={state.query}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </>
  );
};
export default SearchForm;
