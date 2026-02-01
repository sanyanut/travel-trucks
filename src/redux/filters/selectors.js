import { selectCatalog } from '../catalog/selectors.js';
import { createSelector } from '@reduxjs/toolkit';

const selectFeatures = state => state.filters.features;
const selectForm = state => state.filters.form;
const selectLocation = state => state.filters.location;
export const selectFilters = state => state.filters;

export const selectFilteredCatalog = createSelector(
  [selectCatalog, selectFeatures, selectForm, selectLocation],
  (catalog, features, formFilter, location) => {
    if (!catalog) return [];

    const searchStr = location.toLowerCase().trim();

    return catalog.filter(item => {
      const matchesFeatures = features.every(key => {
        if (key === 'automatic') return item.transmission === 'automatic';
        return !!item[key];
      });
      const matchesForm = !formFilter || item.form === formFilter;
      const matchesLocation = item.location.toLowerCase().includes(searchStr);

      return matchesLocation && matchesForm && matchesFeatures;
    });
  }
);
