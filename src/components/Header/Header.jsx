import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className={css.header}>
    <ul className={css.list}>
      <NavLink className={css.item} to="/">
        Home
      </NavLink>
      <NavLink className={css.item} to="/movies">
        Movies
      </NavLink>
    </ul>
  </div>
);
export default Header;
