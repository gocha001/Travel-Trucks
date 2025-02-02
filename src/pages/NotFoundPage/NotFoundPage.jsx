import defaultImg from "../../assets/pictures/notFound.png";
import css from "./NotFoundPage.module.css";

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <img src={defaultImg} />
    </div>
  );
};

export default NotFound;
