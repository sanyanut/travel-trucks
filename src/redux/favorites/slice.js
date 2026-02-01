import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorites: (state, action) => {
      const id = action.payload;
      const index = state.items.indexOf(id);

      if (index === -1) {
        state.items.push(id);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});
export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesSliceReducer = favoritesSlice.reducer;
