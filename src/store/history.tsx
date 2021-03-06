import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { capitalCaseText } from '../helpers';

const historySlice = createSlice({
  name: 'history',
  initialState: [] as string[],
  reducers: {
    addWordToHistory: (state, action: PayloadAction<string>) => {
      const capitalizedText = capitalCaseText(action.payload);
      const index = state.findIndex((word) => word === capitalizedText);
      if (index < 0) {
        state.unshift(capitalizedText);
      } else if (index > 0) {
        const word = state[index];
        state.splice(index, 1);
        state.unshift(capitalCaseText(word));
      }
    },
  },
});

export const { addWordToHistory } = historySlice.actions;

export default historySlice.reducer;
