import { configureStore } from '@reduxjs/toolkit';
import { nivelEjecucionSlice } from './nivelEjecucionSlice';

export default configureStore({
  reducer: {
    nivelEjecucion: nivelEjecucionSlice.reducer,
  },
});
