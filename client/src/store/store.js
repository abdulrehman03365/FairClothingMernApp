import {configureStore} from '@reduxjs/toolkit'
import bookSlice from '../slices/bookslice';
const store = configureStore({
    reducer: {
      book: bookSlice,
    },
  });
export default store;
