import css from './CamperFeatures.module.css';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import { useSelector } from 'react-redux';
import { selectCatalogCamper } from '../../redux/catalog/selectors.js';

function CamperFeatures() {
  const camper = useSelector(selectCatalogCamper);

  if (!camper) {
    return null;
  }

  return (
    <div className={css.camper_features}>
      <FeaturesList feature={camper} />

      <div className={css.camper_features_details}>
        <h3 className={css.camper_features_heading}>Vehicle details</h3>
        <ul className={css.camper_features_items}>
          <li className={css.camper_features_item}>
            <span className={css.camper_features_text}>Form</span>
            <span className={css.camper_features_text}>{camper?.form}</span>
          </li>
          <li className={css.camper_features_item}>
            <span className={css.camper_features_text}>Length</span>
            <span className={css.camper_features_text}>{camper?.length}</span>
          </li>
          <li className={css.camper_features_item}>
            <span className={css.camper_features_text}>Width</span>
            <span className={css.camper_features_text}>{camper?.width}</span>
          </li>
          <li className={css.camper_features_item}>
            <span className={css.camper_features_text}>Height</span>
            <span className={css.camper_features_text}>{camper?.height}</span>
          </li>
          <li className={css.camper_features_item}>
            <span className={css.camper_features_text}>Tank</span>
            <span className={css.camper_features_text}>{camper?.tank}</span>
          </li>
          <li className={css.camper_features_item}>
            <span className={css.camper_features_text}>Consumption</span>
            <span className={css.camper_features_text}>
              {camper?.consumption}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CamperFeatures;
