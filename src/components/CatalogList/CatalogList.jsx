import React, { useState } from 'react';
import css from './CatalogList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CatalogFilter from '../CatalogFilters/CatalogFilters.jsx';
import { selectFilteredCatalog } from '../../redux/filters/selectors.js';
import { toggleFavorites } from '../../redux/favorites/slice.js';
import { resetFilters } from '../../redux/filters/slice.js';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import Button from '../../fragments/Button/Button.jsx';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';

const CatalogList = () => {
  const dispatch = useDispatch();
  const filteredCatalog = useSelector(selectFilteredCatalog);
  const favorites = useSelector(selectFavorites);

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);

    setTimeout(() => {
      window.scrollBy({
        top: 800,
        behavior: 'smooth',
      });
    }, 50);
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setVisibleCount(4);
  };

  const visibleItems = filteredCatalog.slice(0, visibleCount);

  return (
    <div className={css.catalog_container}>
      <CatalogFilter />

      {filteredCatalog.length === 0 ? (
        <div className={css.catalog_not_found}>
          <p>No vehicles found according to filter criteria.</p>
          <Button
            type="button"
            text="Reset filter"
            variant="secondary"
            onClick={handleResetFilters}
          />
        </div>
      ) : (
        <div className={css.catalog_wrap}>
          <ul className={css.catalog_list}>
            {visibleItems.map(item => {
              const isFavorite = favorites.includes(item.id);

              return (
                <li className={css.catalog_card} key={item.id}>
                  <img
                    className={css.catalog_card_image}
                    src={item.gallery[0].thumb}
                    alt={item.name}
                  />
                  <div className={css.catalog_card_info}>
                    <div className={css.catalog_card_top}>
                      <h2 className={css.catalog_card_name}>{item.name}</h2>

                      <h2 className={css.catalog_card_price}>
                        €{item.price.toFixed(2)}
                      </h2>
                      <svg
                        width="26"
                        height="24"
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatch(toggleFavorites(item.id))}
                      >
                        <use
                          href={`/icons.svg#${isFavorite ? 'icon-heart-selected' : 'icon-heart'}`}
                        />
                      </svg>
                    </div>

                    <div className={css.catalog_card_bottom}>
                      <div className={css.catalog_card_extra}>
                        <svg width="16" height="16">
                          <use href="/icons.svg#icon-star-selected" />
                        </svg>
                        <Link
                          className={css.catalog_card_reviews}
                          to={`/catalog/${item.id}/reviews`}
                        >
                          <span className={css.catalog_card_reviews_link}>
                            {item.rating}({item.reviews.length} Reviews)
                          </span>
                        </Link>
                        <span className={css.catalog_card_location}>
                          <svg width="16" height="16">
                            <use href="/icons.svg#icon-map" />
                          </svg>
                          {item.location}
                        </span>
                      </div>

                      <p className={css.catalog_card_description}>
                        {item.description}
                      </p>

                      <FeaturesList feature={item} />

                      <Button
                        link={`/catalog/${item.id}`}
                        text="Show more"
                        variant="default"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {visibleCount < filteredCatalog.length && (
            <div className={css.catalog_more}>
              <Button
                type="button"
                onClick={handleLoadMore}
                variant="secondary"
                text="Load more"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CatalogList;
