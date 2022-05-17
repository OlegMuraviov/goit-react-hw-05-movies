import s from './MovieDetails.module.css';
import { Outlet } from 'react-router-dom';
import GoBack from 'components/GoBack/GoBack';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

const MovieDetails = ({ movie }) => {
  return (
    <>
      <GoBack />
      <div style={{ display: 'flex' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt="title"
        />
        <div>
          <h1 className={s.title}>
            {movie.title}(
            {movie.release_date.slice(0, movie.release_date.indexOf('-'))})
          </h1>
          <span className={s.score}>
            User score: {movie.vote_average * 10}%
          </span>
          <h2 className={s.title}>Overview</h2>
          <p className={s.score}>{movie.overview}</p>
          <h2 className={s.title}>Genres</h2>
          <span className={s.score}>
            {movie.genres.map(obj => obj.name).join(', ')}
          </span>
        </div>
      </div>

      <AdditionalInformation id={movie.id} />
      <Outlet />
    </>
  );
};
export default MovieDetails;
