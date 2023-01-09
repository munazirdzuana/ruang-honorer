import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../fiture/AuthSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});