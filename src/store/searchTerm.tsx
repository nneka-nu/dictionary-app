import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    updateSearchTerm: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { updateSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;
