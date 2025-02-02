import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCatalog = () => {
    navigate("/catalog");
  };

  return (
    <div className={css.homeContainer}>
      <div className={css.homeText}>
        <div className={css.homeTitleContainer}>
          <h1 className={css.homeTitle}>Campers of your dreams</h1>
          <h3 className={css.homeSubTitle}>
            You can find everything you want in our catalog
          </h3>
        </div>
        <button className={css.homeBtn} onClick={handleCatalog}>
          View Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
