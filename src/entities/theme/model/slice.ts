import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type ThemeState = {
  isSidebarMini: boolean;
  headerHeight: number;
  announcementHeight: number;
  sidebarWidth: number;
};

const initialState: ThemeState = {
  isSidebarMini: true,
  headerHeight: 0,
  announcementHeight: 0,
  sidebarWidth: 0,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSidebarMini: (state) => {
      state.isSidebarMini = !state.isSidebarMini;
    },
    updateHeaderHeight: (state, action: PayloadAction<number>) => {
      state.headerHeight = action.payload;
    },
    updateAnnouncementHeight: (state, action: PayloadAction<number>) => {
      state.announcementHeight = action.payload;
    },
    updateSidebarWidth: (state, action: PayloadAction<number>) => {
      state.sidebarWidth = action.payload;
    },
  },
});

export const {
  setSidebarMini,
  updateHeaderHeight,
  updateAnnouncementHeight,
  updateSidebarWidth,
} = themeSlice.actions;

export default themeSlice.reducer;
