import notificationReducer from '@/entities/notification/model/slice.ts';
import sidebarMediaReducer from '@/entities/rightSidebar/model/slice.ts';
import themeReducer from '@/entities/theme/model/slice.ts';
import sessionUserReducer from '@/entities/user/model/slice.ts';

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  themeReducer,
  sidebarMediaReducer,
  notificationReducer,
  sessionUserReducer,
});
