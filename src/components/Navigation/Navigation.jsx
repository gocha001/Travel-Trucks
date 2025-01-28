import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { Logo } from "../Logo/Logo.jsx";

export const Navigation = () => {
  return (
    <div className={css.navigation}>
      <Logo className={css.navLogo} />
      <div className={css.links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Catalog
        </NavLink>
      </div>
    </div>
  );
};
