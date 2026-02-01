import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filters/slice.js';
import { staticParams } from '../../data/static';
import css from './CatalogFilters.module.css';
import Button from '../../fragments/Button/Button.jsx';

const CatalogFilters = () => {
  const dispatch = useDispatch();

  const initialValues = {
    features: [],
    form: '',
    location: '',
  };

  const handleSubmit = values => {
    dispatch(setFilters(values));
  };

  return (
    <aside className={css.filters}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className={css.filters_location}>
              <label htmlFor="location" className={css.filters_location_label}>
                Location
              </label>
              <div className={css.filters_location_inner}>
                <svg
                  className={css.filters_location_icon}
                  width="20"
                  height="20"
                >
                  <use href="/icons.svg#icon-map" />
                </svg>
                <Field
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.filters_location_field}
                />
              </div>
            </div>

            <div className={css.filters_section}>
              <p className={css.filters_equipment_label}>Filters</p>
              <h3 className={css.filters_heading}>Vehicle equipment</h3>
              <div className={css.filters_grid}>
                {staticParams.featuresOptions.map(item => (
                  <label key={item.value} className={css.filters_item_wrapper}>
                    <Field
                      type="checkbox"
                      name="features"
                      value={item.value}
                      className={css.filters_hidden_input}
                    />
                    <div className={css.filters_item_card}>
                      <svg width="32" height="32">
                        <use href={`/icons.svg#${item.icon}`} />
                      </svg>
                      <p className={css.filters_item_text}>{item.text}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className={css.filters_section}>
              <h3 className={css.filters_heading}>Vehicle type</h3>
              <div className={css.filters_grid}>
                {staticParams.featuresForm.map(item => (
                  <label key={item.value} className={css.filters_item_wrapper}>
                    <Field
                      type="radio"
                      name="form"
                      value={item.value}
                      className={css.filters_hidden_input}
                    />
                    <div className={css.filters_item_card}>
                      <svg width="32" height="32">
                        <use href={`/icons.svg#${item.icon}`} />
                      </svg>
                      <p className={css.filters_item_text}>{item.text}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Button text="Search" type="submit" variant="default" />
          </Form>
        )}
      </Formik>
    </aside>
  );
};

export default CatalogFilters;
