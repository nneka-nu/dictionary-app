import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { capitalCaseText } from '../helpers';

export const vobabSlice = createSlice({
  name: 'vocab',
  initialState: [] as string[],
  reducers: {
    addWordToVocab: (state, action: PayloadAction<string>) => {
      const capitalizedText = capitalCaseText(action.payload);
      if (!state.includes(capitalizedText)) {
        state.unshift(capitalizedText);
      }
    },
    removeWordFromVocab: (state, action: PayloadAction<string>) => {
      return state.filter((word) => word !== action.payload);
    },
  },
});

export const { addWordToVocab, removeWordFromVocab } = vobabSlice.actions;

export default vobabSlice.reducer;
