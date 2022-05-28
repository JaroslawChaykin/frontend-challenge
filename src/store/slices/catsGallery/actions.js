import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'b7bb420a-6e00-4ea7-83c6-fa4a7c84e52d'

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async (params, thunkApi) => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
          headers: {
              'x-api-key': apiKey
          },
          params: {
              limit: params.limit
          }
      })
      return response.data
  }
);