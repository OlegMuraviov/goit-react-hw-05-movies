import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './SearchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const onInput = e => {
    setQuery(e.target.value);
  };

  const onSubmitSearch = e => {
    e.preventDefault();
    navigate({ search: `query=${query}` });
  };

  return (
    <>
      <form onSubmit={onSubmitSearch} className={s.form}>
        <input
          onChange={onInput}
          type="text"
          placeholder="Let's find some movies"
          value={query}
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
