import css from "./Features.module.css";
import { useSelector } from "react-redux";
import { selectCamperId } from "../../redux/camper/selectors";

const Features = () => {
const camperId = useSelector(selectCamperId);

  return (
    <div className={css.features}>
      <div className={css.badges}>
        <div className={css.badgesItem}>
          <svg className={css.badgesSvg}>
            <use href="/src/assets/icons/catalog/icon-card.svg#icon-diagram" />
          </svg>
          <p className={css.badgesText}>{camperId.transmission}</p>
        </div>

        <div className={css.badgesItem}>
          <svg className={css.badgesSvg}>
            <use href="/src/assets/icons/catalog/icon-card.svg#icon-fuel-pump" />
          </svg>
          <p className={css.badgesText}>{camperId.engine}</p>
        </div>

        {camperId.kitchen && (
          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-cup-hot" />
            </svg>
            <p className={css.badgesText}>Kithen</p>
          </div>
        )}

        {camperId.radio && (
          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-ui-radios" />
            </svg>
            <p className={css.badgesText}>Radio</p>
          </div>
        )}

        {camperId.AC && (
          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-wind" />
            </svg>
            <p className={css.badgesText}>AC</p>
          </div>
        )}

        {camperId.bathroom && (
          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-ph_shower" />
            </svg>
            <p className={css.badgesText}>Bathroom</p>
          </div>
        )}

        {camperId.refrigerator && (
          <div className={css.badgesItem}>
            <svg className={css.badgesSvg}>
              <use href="/src/assets/icons/catalog/icon-card.svg#icon-solar_fridge-outline" />
            </svg>
            <p className={css.badgesText}>Refrigerator</p>
          </div>
        )}
      </div>

      <div className={css.details}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <hr className={css.detailsLine} />
        <div className={css.detailsInfo}>
          <div className={css.detailsItem}>
            <p className={css.detailsText}>Form</p>
            <p className={css.detailsText}>{camperId.form}</p>
          </div>
          <div className={css.detailsItem}>
            <p className={css.detailsText}>Length</p>
            <p className={css.detailsText}>{camperId.length}</p>
          </div>
          <div className={css.detailsItem}>
            <p className={css.detailsText}>Width</p>
            <p className={css.detailsText}>{camperId.width}</p>
          </div>
          <div className={css.detailsItem}>
            <p className={css.detailsText}>Height</p>
            <p className={css.detailsText}>{camperId.height}</p>
          </div>
          <div className={css.detailsItem}>
            <p className={css.detailsText}>Tank</p>
            <p className={css.detailsText}>{camperId.tank}</p>
          </div>
          <div className={css.detailsItem}>
            <p className={css.detailsText}>Consumption</p>
            <p className={css.detailsText}>{camperId.consumption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;