import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorite: []
};

const FavoriteSlice = createSlice({
    name: 'catsGallery',
    initialState,
    reducers: {
        addCatToFavorite: (state, action) => {
            state.favorite.push(action.payload)
        },
        removeCatFromFavorite: (state, action) => {
            state.favorite = state.favorite.filter(item => item.id !== action.payload)
        }
    }
});
export const {addCatToFavorite, removeCatFromFavorite} = FavoriteSlice.actions
export default FavoriteSlice.reducer;