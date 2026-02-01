import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <header className={css.header}>
      <NavLink className={css.logo} to="/">
        <img src="/Logo.webp" alt="logo" />
      </NavLink>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${css.navigation_link} ${css.active}`
              : css.navigation_link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${css.navigation_link} ${css.active}`
              : css.navigation_link
          }
          to="/catalog"
          end
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
