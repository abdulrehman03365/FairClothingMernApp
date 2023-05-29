import {configureStore} from '@reduxjs/toolkit'
import bookSlice from '../slices/bookslice';
import authSlice from '../slices/authSlice';
const store = configureStore({
    reducer: {
      book: bookSlice,
      auth:authSlice
    },
  });
export default store;
