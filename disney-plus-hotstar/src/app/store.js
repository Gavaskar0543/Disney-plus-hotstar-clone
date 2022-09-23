import  { configureStore } from  '@reduxjs/toolkit';
import movieReducer from '../features/Movie/MovieSlice';
import userReducer from '../features/User/UserSlice'
export const store = configureStore({
  reducer: {
    movie:movieReducer,
    user:userReducer
  }
})