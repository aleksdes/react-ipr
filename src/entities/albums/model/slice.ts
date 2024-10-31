import { PhotoType } from '@/entities/photos';
import { baseReducers, baseStore, IBaseStore } from '@/shared/lib/baseStore';

import { createSlice } from '@reduxjs/toolkit';

import { AlbumType } from './type.ts';

export type GroupsState = IBaseStore<AlbumType<PhotoType>>;

const initialState: GroupsState = {
  ...baseStore<AlbumType<PhotoType>>(),
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    ...baseReducers<AlbumType<PhotoType>>(),
  },
});

export const albumsActions = albumsSlice.actions;

export default albumsSlice.reducer;
