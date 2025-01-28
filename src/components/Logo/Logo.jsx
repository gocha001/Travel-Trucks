import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css.logoContainer}>
      <svg width="136" height="16">
        <use href="/src/assets/icons/icon-logo.svg#icon-TravelTrucks" />
      </svg>
    </div>
  );
}
