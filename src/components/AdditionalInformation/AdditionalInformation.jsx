import { Link, useLocation } from 'react-router-dom';
import s from './AdditionalInformation.module.css';

const AdditionalInformation = () => {
  const location = useLocation();

  return (
    <>
      <h3 className={s.title}>Additional Information</h3>
      <div style={{ display: 'flex' }}>
        <Link to="cast" state={location.state} className={s.item}>
          Cast
        </Link>
        <Link to="reviews" state={location.state} className={s.item}>
          Reviews
        </Link>
      </div>
    </>
  );
};
export default AdditionalInformation;
