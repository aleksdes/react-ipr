import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { GroupType } from './type.ts';

export type GroupsState = {
  recommendedGroups: GroupType[];
  joinedGroups: GroupType[];
  myGroups: GroupType[];
  joinedCount: number;
};

const initialState: GroupsState = {
  recommendedGroups: [],
  joinedGroups: [],
  myGroups: [],
  joinedCount: 0,
};

export const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setJoined: (state: GroupsState, action: PayloadAction<GroupType[]>) => {
      state.joinedGroups = action.payload;
    },

    setMergeJoined: (
      state: GroupsState,
      action: PayloadAction<GroupType[]>
    ) => {
      state.joinedGroups = [...state.joinedGroups, ...action.payload];
    },

    setRecommended: (
      state: GroupsState,
      action: PayloadAction<GroupType[]>
    ) => {
      state.recommendedGroups = action.payload;
    },

    setJoinedCount: (
      state: GroupsState,
      action: PayloadAction<GroupType[]>
    ) => {
      state.joinedCount = action.payload.length;
    },

    updateItem: (state: GroupsState, action: PayloadAction<GroupType>) => {
      const { id } = action.payload;
      const indexRecommended = state.recommendedGroups.findIndex(
        (item) => item.id === id
      );
      const indexJoined = state.joinedGroups.findIndex(
        (item) => item.id === id
      );

      if (indexRecommended !== -1) {
        state.recommendedGroups[indexRecommended] = {
          ...state.recommendedGroups[indexRecommended],
          ...action.payload,
        };
      }

      if (indexJoined !== -1) {
        state.joinedGroups[indexJoined] = {
          ...state.joinedGroups[indexJoined],
          ...action.payload,
        };
      }
    },
  },
});

export const groupsActions = groupsSlice.actions;

export default groupsSlice.reducer;
