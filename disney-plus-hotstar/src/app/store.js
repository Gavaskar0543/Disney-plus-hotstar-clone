import  { configureStore } from  '@reduxjs/toolkit';
import movieReducer from '../features/Movie/MovieSlice';

export const store = configureStore({
  reducer: {
    movie:movieReducer,
  }
})