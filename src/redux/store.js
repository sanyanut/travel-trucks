import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { catalogSliceReducer } from './catalog/slice.js';
import { filtersSliceReducer } from './filters/slice.js';
import { favoritesSliceReducer } from './favorites/slice.js';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesSliceReducer
);

export const store = configureStore({
  reducer: {
    catalog: catalogSliceReducer,
    filters: filtersSliceReducer,
    favorites: persistedFavoritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
