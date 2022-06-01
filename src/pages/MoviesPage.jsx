import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieBySearch } from 'utils/getDataFromApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState({
    data: [],
    loading: false,
    error: null,
  });
  const location = useLocation();

  useEffect(() => {
    const paramsString = new URLSearchParams(location.search);
    const query = paramsString.get('query');

    if (!query) return;
    const fetchMovies = async () => {
      setMovies(prevState => ({ ...prevState, loading: true }));
      try {
        const data = await getMovieBySearch(query);
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          data: data.results,
        }));
      } catch ({ message }) {
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          error: message,
        }));
      }
    };
    fetchMovies();
  }, [location]);

  const { data, loading, error } = movies;

  return (
    <>
      <SearchForm />
      {loading && <p>... loading</p>}
      {error && <p>{error.message}</p>}
      <MoviesList movies={data} />
    </>
  );
};
export default MoviesPage;
