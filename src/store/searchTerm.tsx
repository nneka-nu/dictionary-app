import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    updateSearchTerm: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const { updateSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
