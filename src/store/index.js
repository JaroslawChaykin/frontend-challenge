import {configureStore, combineReducers} from '@reduxjs/toolkit';
import CatsGallerySlice from './slices/catsGallery/catsGallerySlice';

const rootReducer = combineReducers({
    cats: CatsGallerySlice
})

export const store = configureStore({
    reducer: rootReducer
})