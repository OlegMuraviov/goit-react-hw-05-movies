import s from './HomePage.module.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { getPopularMovies } from 'utils/getDataFromApi';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [popular, setPopular] = useState({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        setPopular(prevState => ({ ...prevState, loading: true }));
        const data = await getPopularMovies();
        setPopular(prevState => ({
          ...prevState,
          loading: false,
          data: data.results,
        }));
      } catch (error) {
        setPopular(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchPopularMovies();
  }, []);
  const { data, loading } = popular;
  return (
    <>
      {loading && <p>...loading</p>}
      <h1 className={s.title}>Trending today</h1>
      <MoviesList movies={data} />
    </>
  );
};
export default HomePage;
