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

  // від серверу приходить помилка 404, як відобразити що контент по фільму не знайдений

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        setMovie(prevState => ({ ...prevState, content: data }));
      })
      .catch(error => {
        setMovie(prevState => ({ ...prevState, error: error.message }));
      })
      .finally(() => {});
  }, [movieId]);

  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const data = await getMovieById(movieId);
  //       setMovie(prevState => ({ ...prevState, content: data }));
  //     } catch (error) {
  //       console.log('WARNING');
  //     }
  //   };
  //   fetchMovie();
  // }, []);

  const checkData = () => {
    if (movie.error)
      return (
        <>
          <GoBack />
          <h2>Server didn't find info about this movie</h2>
        </>
      );
    else {
      return movie.content && <MovieDetails movie={movie.content} />;
    }
  };

  return <>{checkData()}</>;
};
export default MovieDetailsPage;

// const [movie, setMovie] = useState(null);

// useEffect(() => {
//   getMovieById(movieId)
//     .then(data => {
//       setMovie(data);
//     })
//     .catch(error => console.log(error.message))
//     .finally(() => {});
// }, []);
