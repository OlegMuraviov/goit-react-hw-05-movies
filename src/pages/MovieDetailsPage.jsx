import MovieDetails from 'components/MovieDetails/MovieDetails';
import { getMovieById } from '../utils/getDataFromApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  }, [movieId]);

  return <>{movie && <MovieDetails movie={movie} />}</>;
};
export default MovieDetailsPage;
