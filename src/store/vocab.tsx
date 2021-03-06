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
  },
});

export const { addWordToVocab } = vobabSlice.actions;

export default vobabSlice.reducer;
