import { CamperId } from "../../components/CamperId/CamperId";
import css from "./CamperPage.module.css";

const CamperPage = () => {
  return (
    <div className={css.camperContainer}>
      <CamperId />
    </div>
  );
};

export default CamperPage;
