import css from "./Logo.module.css";
import icons from "../../assets/icons/logo/icon-logo.svg";

export const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <svg width="136" height="16">
        <use href={`${icons}#icon-TravelTrucks`} />
      </svg>
    </div>
  );
};
