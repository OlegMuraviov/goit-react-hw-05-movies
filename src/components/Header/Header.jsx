import { Link } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" className={s.header__title}>
        Home
      </Link>
      <Link to="/movies" className={s.header__title}>
        Movies
      </Link>
    </header>
  );
};
export default Header;
