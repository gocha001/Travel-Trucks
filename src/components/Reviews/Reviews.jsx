import css from "./Reviews.module.css";
import { useSelector } from "react-redux";
import { selectCamperId } from "../../redux/camper/selectors";

const Reviews = () => {
  const camperId = useSelector(selectCamperId);

  return (
    <div className={css.reviews}>
      <ul className={css.reviewsUl}>
        {camperId.reviews.map((review, index) => (
          <li key={index} className={css.review}>
            <div className={css.reviewTitle}>
              <div className={css.circle}>
                <p className={css.letter}>{review.reviewer_name.charAt(0)}</p>
              </div>
              <div className={css.nameRating}>
                <h3 className={css.name}>{review.reviewer_name}</h3>
                <div className={css.rating}>
                  {[...Array(5)].map((_, index) =>
                    index < review.reviewer_rating ? (
                      <svg
                        key={index}
                        className={css.ratingSvg}
                        widths="16"
                        height="16"
                      >
                        <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Pressed-1" />
                      </svg>
                    ) : (
                      <svg
                        key={index}
                        className={css.ratingSvg}
                        widths="16"
                        height="16"
                      >
                        <use href="/src/assets/icons/catalog/icon-love-star.svg#icon-Property-1Default-1" />
                      </svg>
                    )
                  )}
                </div>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
