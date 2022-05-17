import { useLocation, useNavigate } from 'react-router-dom';

const GoBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goHome = () => {
    navigate(location.state);
  };
  return (
    <button
      type="button"
      onClick={goHome}
      style={{
        margin: '5px auto',
        padding: '5px',
        cursor: 'pointer',
      }}
    >
      Go back
    </button>
  );
};
export default GoBack;
