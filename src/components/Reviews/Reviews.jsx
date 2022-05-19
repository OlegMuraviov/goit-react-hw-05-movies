import { getReviews } from 'utils/getDataFromApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(err => console.log(err))
      .finally(() => {});
  }, [movieId]);

  return (
    <>
      <h1>Reviews</h1>

      <ul>
        {reviews.length ? (
          reviews.map(element => <li key={element.id}>{element.content}</li>)
        ) : (
          <li>
            <p>No reviews</p>
          </li>
        )}
      </ul>
    </>
  );
};
export default Reviews;
