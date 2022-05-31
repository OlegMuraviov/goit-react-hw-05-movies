import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  const getActiveLink = ({ isActive }) => {
    return isActive
      ? `${s.header__title} ${s.active__link}`
      : `${s.header__title}`;
  };
  return (
    <header className={s.header}>
      <NavLink to="/" className={getActiveLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getActiveLink}>
        Movies
      </NavLink>
    </header>
  );
};
export default Header;
