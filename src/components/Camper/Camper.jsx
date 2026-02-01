import css from './Camper.module.css';
import { useSelector } from 'react-redux';
import { selectCatalogCamper } from '../../redux/catalog/selectors.js';
import { Link, NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import CamperForm from '../CamperForm/CamperForm.jsx';

function Camper() {
  const catalogCamper = useSelector(selectCatalogCamper);

  return (
    <div className={css.camper}>
      <h2 className={css.camper_card_name}>{catalogCamper?.name}</h2>
      <div className={css.camper_card_extra}>
        <svg width="16" height="16">
          <use href="/icons.svg#icon-star-selected" />
        </svg>
        <Link
          className={css.camper_card_reviews}
          to={`/catalog/${catalogCamper?.id}/reviews`}
        >
          <span className={css.camper_card_reviews_link}>
            {catalogCamper?.rating}({catalogCamper?.reviews.length} Reviews)
          </span>
        </Link>
        <span className={css.camper_card_location}>
          <svg width="16" height="16">
            <use href="/icons.svg#icon-map" />
          </svg>
          {catalogCamper?.location}
        </span>
      </div>
      <h2 className={css.camper_card_price}>
        €{catalogCamper?.price.toFixed(2)}
      </h2>
      <ul className={css.camper_gallery}>
        {catalogCamper?.gallery.map((item, index) => (
          <li className={css.camper_gallery_item} key={index}>
            <img
              className={css.camper_gallery_image}
              src={item.original}
              alt=""
            />
          </li>
        ))}
      </ul>
      <p className={css.camper_description}>{catalogCamper?.description}</p>
      <ul className={css.camper_navigation}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.camper_reviews_link} ${css.active}`
                : css.camper_reviews_link
            }
            to="features"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.camper_reviews_link} ${css.active}`
                : css.camper_reviews_link
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.camper_info}>
        <Outlet />
        <CamperForm />
      </div>
    </div>
  );
}

export default Camper;
