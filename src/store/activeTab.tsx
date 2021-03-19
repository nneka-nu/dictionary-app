import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum WordsListTab {
  history = 'history',
  vocab = 'vocab',
}

const activeTab = createSlice({
  name: 'activeTab',
  initialState: WordsListTab.history,
  reducers: {
    setActiveTab: (_, action: PayloadAction<WordsListTab>) => {
      return action.payload;
    },
  },
});

export const { setActiveTab } = activeTab.actions;

export default activeTab.reducer;
