import {configureStore, combineReducers} from '@reduxjs/toolkit';
import CatsGallerySlice from './slices/catsGallery/catsGallerySlice';
import FavoriteSlice from './slices/favorite/FavoriteSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite']
}

const rootReducer = combineReducers({
    cats: CatsGallerySlice,
    favorite: FavoriteSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
})
export const persistor = persistStore(store)