import css from '../FeaturesList/FeaturesList.module.css';
import { staticParams } from '../../data/static.js';
import Tag from '../../fragments/Tag/Tag.jsx';
import React from 'react';

function FeaturesList({ feature }) {
  if (!feature) return null;
  return (
    <ul className={css.catalog_card_tags}>
      {staticParams.featuresList.map(({ key, value, icon, text }, index) => {
        if (feature[key] === true || feature[key] === value) {
          return (
            <li className={css.catalog_card_tag} key={`${index}-${key}`}>
              <Tag text={text} icon={icon} />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

export default FeaturesList;
