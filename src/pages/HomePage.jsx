import s from './HomePage.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { getPopularMovies } from 'utils/getDataFromApi';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(data => {
        setPopular(data.results);
      })
      .catch(error => console.log(error.message))
      .finally(() => {});
  }, []);
  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <MoviesList movies={popular} />
    </>
  );
};
export default HomePage;
