import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    features: [],
    form: '',
    location: '',
  },
  reducers: {
    setFilters: (state, action) => {
      state.features = action.payload.features;
      state.form = action.payload.form;
      state.location = action.payload.location;
    },
    resetFilters: state => {
      state.features = [];
      state.form = '';
      state.location = '';
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersSliceReducer = filtersSlice.reducer;
