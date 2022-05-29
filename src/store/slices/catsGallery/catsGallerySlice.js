import { createSlice } from '@reduxjs/toolkit';
import { fetchCats } from './actions';

const initialState = {
    cats: [],
    error: '',
    loading: false
};

const CatsGallerySlice = createSlice({
    name: 'catsGallery',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCats.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.cats = [...state.cats, ...action.payload]
        })
        builder.addCase(fetchCats.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCats.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default CatsGallerySlice.reducer;