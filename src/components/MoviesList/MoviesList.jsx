import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';
import noImage from '../../images/No-Image-Placeholder.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  //як поставити альтернативне зображення (відсутній малюнок)
  //не виходить завантажити альтернативний малюнок, в чому проблема?

  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(element => {
            const checkMovieImage = () => {
              if (!element.backdrop_path && !element.poster_path) {
                return noImage;
              } else {
                return `https://image.tmdb.org/t/p/w500${
                  element.backdrop_path
                    ? element.backdrop_path
                    : element.poster_path
                }`;
              }
            };

            return (
              <li key={element.id}>
                <Link
                  className={s.item__link}
                  to={`/movies/${element.id}`}
                  state={location}
                >
                  <h1 className={s.item__title}>
                    {element.title ?? element.name}
                  </h1>
                  <img
                    className={s.image}
                    src={checkMovieImage()}
                    alt="title"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

MoviesList.propTypes = { movie: PropTypes.object };

export default MoviesList;
