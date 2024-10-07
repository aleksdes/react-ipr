import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PhotoType } from './type';

export type PhotosState = {
  photos: PhotoType[];
};

const initialState: PhotosState = {
  photos: [],
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state: PhotosState, action: PayloadAction<PhotoType[]>) => {
      state.photos = action.payload;
    },
  },
});

export const photosActions = photosSlice.actions;

export default photosSlice.reducer;
