export const selectPhotos = (state: RootState) => state.photosReducer;

export const fetchPhotosAction = (payload?: any) => {
  return { type: 'FETCH_PHOTOS', payload };
};
