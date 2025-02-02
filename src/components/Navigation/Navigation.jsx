import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { Logo } from "../Logo/Logo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { viewFavorite } from "../../redux/camper/camperSlice.js";
import { selectFavorites } from "../../redux/camper/selectors.js";

export const Navigation = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleClick = () => {
    dispatch(viewFavorite());
  };

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
      <div className={css.favorite}>
        <button className={css.favoriteBtn} onClick={handleClick} type="button">
          {!favorites.length && (
            <svg width="26" height="26">
              <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Default" />
            </svg>
          )}
          {!!favorites.length && (
            <svg width="26" height="26">
              <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1pressed" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
