import { getCredits } from 'utils/getDataFromApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCredits(movieId)
      .then(data => {
        setCasts(data.cast);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  }, [movieId]);
  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {casts.map(element => {
          return (
            <li key={element.id}>
              <img
                style={{ width: '100px' }}
                src={`https://image.tmdb.org/t/p/w500${element.profile_path}`}
                alt={element.character}
              />
              <p>{element.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
