import { baseReducers, baseStore, IBaseStore } from '@/shared/lib/baseStore';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FriendType } from './index.ts';

export type FriendsState = IBaseStore<FriendType>;

const initialState: FriendsState = {
  ...baseStore<FriendType>(),
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    ...baseReducers<FriendType>(),

    setMergeFriends: (
      state: FriendsState,
      action: PayloadAction<FriendType[]>
    ) => {
      state.items = [...state.items, ...action.payload];
    },

    setTotal: (state: FriendsState, action: PayloadAction<number>) => {
      state.meta = { ...state.meta, total: action.payload };
    },

    deleteItemById: (
      state: FriendsState,
      action: PayloadAction<string | number>
    ) => {
      state.items = state.items.filter(
        (item: FriendType) => item.id !== action.payload
      );
    },
  },
});

export const friendsActions = friendsSlice.actions;

export default friendsSlice.reducer;
