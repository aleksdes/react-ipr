import sidebarMediaSlice from '@/entities/rightSidebar/model/slice.ts';
import themeReducer from '@/entities/theme/model/slice.ts';

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  themeReducer,
  sidebarMediaSlice,
});
