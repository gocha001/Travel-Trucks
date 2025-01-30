import css from './CatalogPage.module.css';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { CardList } from '../../components/CardList/CardList';


const CatalogPage = () => {
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
}

export default CatalogPage;
