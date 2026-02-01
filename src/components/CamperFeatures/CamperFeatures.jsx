import css from './CamperFeatures.module.css';
import FeaturesList from '../FeaturesList/FeaturesList.jsx';
import { useSelector } from 'react-redux';
import { selectCatalogCamper } from '../../redux/catalog/selectors.js';
import { staticParams } from '../../data/static.js';

function CamperFeatures() {
  const camper = useSelector(selectCatalogCamper);
  if (!camper) return null;

  const getFormLabel = value => {
    const formObj = staticParams.featuresForm.find(f => f.value === value);
    return formObj ? formObj.text : value;
  };

  return (
    <div className={css.camper_features}>
      <FeaturesList feature={camper} />

      <div className={css.camper_features_details}>
        <h3 className={css.camper_features_heading}>Vehicle details</h3>
        <ul className={css.camper_features_items}>
          {staticParams.vehicleDetails.map(({ key, text }) => (
            <li className={css.camper_features_item} key={key}>
              <span className={css.camper_features_text}>{text}</span>
              <span className={css.camper_features_text}>
                {key === 'form' ? getFormLabel(camper[key]) : camper[key]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CamperFeatures;
