import { useDispatch, useSelector } from "react-redux";
import css from "./CardList.module.css";
import {
  selectCampers,
  selectPage,
  selectTotal,
} from "../../redux/camper/selectors";
import { Card } from "../Card/Card.jsx";
import { handleLoadMore } from "../../redux/camper/camperSlice.js";

export const CardList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const page = useSelector(selectPage);
  const total = useSelector(selectTotal);

  const onAdd = () => {
    dispatch(handleLoadMore());
    window.scrollTo(0, 0);
  };

  return (
    <div className={css.cardListContainer}>
      <ul className={css.listItems}>
        {campers.map((camper) => (
          <li className={css.listItem} key={camper.id}>
            <Card camper={camper} />
          </li>
        ))}
      </ul>
      {page < Math.ceil(total / 4) && (
        <button className={css.loadMoreBtn} onClick={onAdd}>
          Load more
        </button>
      )}
    </div>
  );
};
