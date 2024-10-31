import { baseReducers, baseStore, IBaseStore } from '@/shared/lib/baseStore';

import { createSlice } from '@reduxjs/toolkit';

import { PhotoType } from './type';

export type PhotosState = IBaseStore<PhotoType>;

const initialState: PhotosState = {
  ...baseStore<PhotoType>(),
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    ...baseReducers<PhotoType>(),
  },
});

export const photosActions = photosSlice.actions;

export default photosSlice.reducer;
