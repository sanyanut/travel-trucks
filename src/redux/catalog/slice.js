import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog, fetchCatalogItem } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    camper: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCatalog.pending, handlePending)
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = null;
        state.items = action.payload.items;
      })
      .addCase(fetchCatalog.rejected, handleRejected)
      .addCase(fetchCatalogItem.pending, handlePending)
      .addCase(fetchCatalogItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchCatalogItem.rejected, handleRejected);
  },
});

export const catalogSliceReducer = catalogSlice.reducer;
