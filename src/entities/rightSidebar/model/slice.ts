import { rightSidebarType } from '@/entities/rightSidebar/model/types.ts';

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type sideBarState = {
  isSidebarShow: boolean;
  type: rightSidebarType;
};

const initialState: sideBarState = {
  isSidebarShow: false,
  type: rightSidebarType.socialMedia,
};

export const sidebarMediaSlice = createSlice({
  name: 'sidebarMedia',
  initialState,
  reducers: {
    setSidebarShow: (state) => {
      state.isSidebarShow = !state.isSidebarShow;
    },
    setSidebarType: (state, action: PayloadAction<rightSidebarType>) => {
      state.type = action.payload;
    },
    clearSidebar: (state) => {
      state.type = rightSidebarType.socialMedia;
      state.isSidebarShow = false;
    },
  },
});

export const sidebarMediaActions = sidebarMediaSlice.actions;

export default sidebarMediaSlice.reducer;
