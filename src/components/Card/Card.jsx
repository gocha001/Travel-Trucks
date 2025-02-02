import css from "./Card.module.css";
import { FaEuroSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/camper/camperOperations";
import { selectFavorites } from "../../redux/camper/selectors";
import { addFavorite, removeFavorite } from "../../redux/camper/camperSlice";

export const Card = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav.id === camper.id);

  const navigate = useNavigate();

  const handleLove = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const handleCamperId = (id) => {
    dispatch(getCamperById(id));
    setTimeout(() => {
      navigate(`/catalog/${camper.id}`);
    }, 500);
  };

  return (
    <div className={css.cardContainer}>
      <img src={camper.gallery[0].thumb} className={css.cardImg} />
      <div className={css.infoContainer}>
        <div className={css.textContainer}>
          <div className={css.title}>
            <h2 className={css.text}>{camper.name}</h2>
            <div className={css.price}>
              <FaEuroSign className={css.euro} />
              <h2 className={css.text}>{camper.price}.00</h2>
              <button
                className={css.loveBtn}
                type="button"
                onClick={handleLove}
              >
                {!isFavorite && (
                  <svg width="26" height="26">
                    <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Default" />
                  </svg>
                )}
                {isFavorite && (
                  <svg width="26" height="26">
                    <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1pressed" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className={css.details}>
            <div className={css.reviews}>
              {camper.rating > 2 ? (
                <svg className={css.ratingSvg} widths="16" height="16">
                  <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Pressed-1" />
                </svg>
              ) : (
                <svg className={css.ratingSvg} widths="16" height="16">
                  <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Default-1" />
                </svg>
              )}
              <p className={css.reviewsText}>
                {camper.rating}({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.location}>
              <svg className={css.locationSvg} widths="16" height="16">
                <use href="/src/assets/icons/catalog/icon-map.svg#icon-Map" />
              </svg>
              <p className={css.locationText}>{camper.location}</p>
            </div>
          </div>
        </div>

        <p className={css.support}>{camper.description}</p>

        <div className={css.badges}>
          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-diagram" />
            </svg>
            <p className={css.badgesText}>{camper.transmission}</p>
          </div>

          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-fuel-pump" />
            </svg>
            <p className={css.badgesText}>{camper.engine}</p>
          </div>

          {camper.kitchen && (
            <div className={css.badgesItem}>
              <svg className={css.badgesSvg}>
                <use href="/src/assets/icons/catalog/icon-card.svg#icon-cup-hot" />
              </svg>
              <p className={css.badgesText}>Kitchen</p>
            </div>
          )}

          {camper.radio && (
            <div className={css.badgesItem}>
              <svg className={css.badgesSvg}>
                <use href="/src/assets/icons/catalog/icon-card.svg#icon-ui-radios" />
              </svg>
              <p className={css.badgesText}>Radio</p>
            </div>
          )}

          {camper.AC && (
            <div className={css.badgesItem}>
              <svg className={css.badgesSvg}>
                <use href="/src/assets/icons/catalog/icon-card.svg#icon-wind" />
              </svg>
              <p className={css.badgesText}>AC</p>
            </div>
          )}

          {camper.bathroom && (
            <div className={css.badgesItem}>
              <svg className={css.badgesSvg}>
                <use href="/src/assets/icons/catalog/icon-card.svg#icon-ph_shower" />
              </svg>
              <p className={css.badgesText}>Bathroom</p>
            </div>
          )}

          {camper.refrigerator && (
            <div className={css.badgesItem}>
              <svg className={css.badgesSvg}>
                <use href="/src/assets/icons/catalog/icon-card.svg#icon-solar_fridge-outline" />
              </svg>
              <p className={css.badgesText}>Refrigerator</p>
            </div>
          )}
        </div>

        <button
          className={css.cardBtn}
          onClick={() => {
            handleCamperId(camper.id);
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};
