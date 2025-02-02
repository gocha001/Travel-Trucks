import css from "./CatalogPage.module.css";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { CardList } from "../../components/CardList/CardList";
import { fetchCampers } from "../../redux/camper/camperOperations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectFilter } from "../../redux/filter/selectors";
import { selectPage } from "../../redux/camper/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const page = useSelector(selectPage);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchCampers());
    }, 100);
  }, [dispatch, filters, page]);

  return (
    <div className={css.catalogContainer}>
      <div className={css.catalogSidebar}>
        <SearchForm />
      </div>
      <div className={css.catalogCards}>
        <CardList />
      </div>
    </div>
  );
};

export default CatalogPage;
