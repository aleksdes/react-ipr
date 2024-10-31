import albumsReducer from '@/entities/albums/model/slice.ts';
import friendsReducer from '@/entities/friends/model/slice.ts';
import groupsReducer from '@/entities/groups/model/slice.ts';
import notificationReducer from '@/entities/notification/model/slice.ts';
import photosReducer from '@/entities/photos/model/slice.ts';
import postsReducer from '@/entities/posts/model/slice.ts';
import sidebarMediaReducer from '@/entities/rightSidebar/model/slice.ts';
import themeReducer from '@/entities/theme/model/slice.ts';
import sessionUserReducer from '@/entities/user/model/slice.ts';

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  themeReducer,
  sidebarMediaReducer,
  notificationReducer,
  sessionUserReducer,
  photosReducer,
  postsReducer,
  groupsReducer,
  friendsReducer,
  albumsReducer,
});
