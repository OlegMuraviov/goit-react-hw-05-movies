import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieBySearch } from 'utils/getDataFromApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const paramsString = new URLSearchParams(location.search);
    const query = paramsString.get('query');

    if (!query) return;
    getMovieBySearch(query).then(data => setMovies(data.results));
  }, [location]);

  return (
    <>
      <SearchForm />
      <MoviesList movies={movies} />
    </>
  );
};
export default MoviesPage;
