export const selectAlbums = (state: RootState) => state.albumsReducer;

export const fetchAlbumsAction = (payload?: any) => {
  return { type: 'FETCH_ALBUMS', payload };
};

export const fetchAlbumByIdAction = (payload?: any) => {
  return { type: 'FETCH_ALBUM_BY_ID', payload };
};
