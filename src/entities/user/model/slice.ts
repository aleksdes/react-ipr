import { SessionUserType } from '@/entities/user';
import { ProfileUserType } from '@/entities/user/model/type.ts';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SessionUserState = {
  sessionUser: SessionUserType | null;
  profileInfo: ProfileUserType | null;
};

const initialState: SessionUserState = {
  sessionUser: null,
  profileInfo: null,
};

export const sessionUserSlice = createSlice({
  name: 'sessionUser',
  initialState,
  reducers: {
    setSessionUser: (
      state: SessionUserState,
      action: PayloadAction<SessionUserType | null>
    ) => {
      state.sessionUser = action.payload;
    },

    setProfileInfo: (
      state: SessionUserState,
      action: PayloadAction<ProfileUserType | null>
    ) => {
      state.profileInfo = action.payload;
    },
  },
});

export const sessionUserActions = sessionUserSlice.actions;

export default sessionUserSlice.reducer;
