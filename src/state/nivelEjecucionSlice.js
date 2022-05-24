import { createSlice } from '@reduxjs/toolkit';

export const nivelEjecucionSlice = createSlice({
  name: 'nivelEjecucion',
  initialState: {
    value: 50,
  },
  reducers: {
    setNivelEjecucion: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setNivelEjecucion } = nivelEjecucionSlice.actions;

export default nivelEjecucionSlice.reducer;
