import React from 'react';
import { useSelector } from 'react-redux';
import { selectCatalogCamper } from '../../redux/catalog/selectors';
import CamperForm from '../CamperForm/CamperForm';
import css from './CamperReviews.module.css';

const CamperReviews = () => {
  const camper = useSelector(selectCatalogCamper);
  const totalStars = 5;

  // Захист від null, якщо дані ще вантажаться
  if (!camper || !camper.reviews) {
    return null;
  }

  return (
    <div className={css.camper_reviews}>
      <div className={css.camper_reviews_column}>
        <ul className={css.camper_reviews_list}>
          {camper.reviews.length === 0 ? (
            <p className={css.no_reviews}>No reviews for this camper yet.</p>
          ) : (
            camper.reviews.map((review, index) => (
              <li key={index} className={css.camper_review_item}>
                <div className={css.camper_reviewer_header}>
                  <div className={css.camper_avatar}>
                    {review.reviewer_name.charAt(0).toUpperCase()}
                  </div>
                  <div className={css.camper_reviewer_info}>
                    <h3 className={css.camper_reviewer_name}>
                      {review.reviewer_name}
                    </h3>
                    <div className={css.camper_stars_list}>
                      {[...Array(totalStars)].map((_, starIndex) => {
                        const isFull = starIndex < review.reviewer_rating;
                        return (
                          <svg width="16" height="16" key={starIndex}>
                            <use
                              href={`/icons.svg#${
                                isFull ? 'icon-star-selected' : 'icon-star'
                              }`}
                            />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <p className={css.camper_comment}>{review.comment}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CamperReviews;
