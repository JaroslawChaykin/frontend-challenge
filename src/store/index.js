import {configureStore, combineReducers} from '@reduxjs/toolkit';
import CatsGallerySlice from './slices/catsGallery/catsGallerySlice';
import FavoriteSlice from './slices/favorite/FavoriteSlice';

const rootReducer = combineReducers({
    cats: CatsGallerySlice,
    favorite: FavoriteSlice
})

export const store = configureStore({
    reducer: rootReducer
})