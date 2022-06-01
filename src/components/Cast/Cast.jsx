import { getCredits } from 'utils/getDataFromApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImage from '../../images/No-Image-Placeholder.png';

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
      <ul style={{ listStyleType: 'none', display: 'flex', flexWrap: 'wrap' }}>
        {casts.map(element => {
          return (
            <div style={{ width: '150px', textAlign: 'center' }}>
              <li key={element.id}>
                <img
                  style={{ width: '100px' }}
                  src={
                    element.profile_path
                      ? `https://image.tmdb.org/t/p/w500${element.profile_path}`
                      : noImage
                  }
                  alt={element.character}
                />
                <p>{element.name}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
