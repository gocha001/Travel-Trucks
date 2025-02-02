import { useSelector } from "react-redux";
import css from "./CamperId.module.css";
import { selectCamperId } from "../../redux/camper/selectors";
import { FaEuroSign } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { ReserveForm } from "../ReserveForm/ReserveForm";

export const CamperId = () => {
  const camperId = useSelector(selectCamperId);

  return (
    <div className={css.camperIdContainer}>
      <div className={css.camperIdTitle}>
        <h2 className={css.camperIdTitleText}>{camperId.name}</h2>
        <div className={css.camperIdDetails}>
          <div className={css.camperIdReviews}>
            <div className={css.reviews}>
              {camperId.rating > 2 ? (
                <svg className={css.ratingSvg} widths="16" height="16">
                  <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Pressed-1" />
                </svg>
              ) : (
                <svg className={css.ratingSvg} widths="16" height="16">
                  <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Default-1" />
                </svg>
              )}
              <p className={css.reviewsText}>
                {camperId.rating}({camperId.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.location}>
              <svg className={css.locationSvg} widths="16" height="16">
                <use href="/src/assets/icons/catalog/icon-map.svg#icon-Map" />
              </svg>
              <p className={css.locationText}>{camperId.location}</p>
            </div>
          </div>
          <div className={css.price}>
            <FaEuroSign className={css.euro} />
            <h2 className={css.text}>{camperId.price}.00</h2>
          </div>
        </div>
      </div>

      <div className={css.pictures}>
        <ul className={css.picturesUl}>
          {camperId.gallery.map((picture, index) => (
            <li key={index}>
              <img src={picture.original} className={css.img} />
            </li>
          ))} 
        </ul>
      </div>
      <div className={css.description}>
        <p className={css.descriptionText}>{camperId.description}</p>
      </div>

      <div>
        <div className={css.linksContainer}>
          <div className={css.links}>
            <NavLink
              to="features"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Features
              <hr className={css.linkLine} />
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Reviews
              <hr className={css.linkLine} />
            </NavLink>
          </div>
          <hr className={css.line} />
        </div>
        <div className={css.section}>
          <Outlet />

          <ReserveForm />
        </div>
      </div>
    </div>
  );
};
