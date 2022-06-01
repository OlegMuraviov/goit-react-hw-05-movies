import MovieDetails from 'components/MovieDetails/MovieDetails';
import { getMovieById } from '../utils/getDataFromApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GoBack from 'components/GoBack/GoBack';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({
    content: null,
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setMovie(prevState => ({ ...prevState, loading: true }));
        const data = await getMovieById(movieId);

        setMovie(prevState => ({
          ...prevState,
          loading: false,
          content: data,
        }));
      } catch (error) {
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovie();
  }, [movieId]);

  const { content, loading, error } = movie;

  return (
    <>
      <GoBack />
      {loading && <p>...loading</p>}
      {error && <p>Server didn't find info about this movie</p>}
      {content && <MovieDetails movie={content} />}
    </>
  );
};
export default MovieDetailsPage;
