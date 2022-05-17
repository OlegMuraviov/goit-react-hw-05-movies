import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(element => {
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
