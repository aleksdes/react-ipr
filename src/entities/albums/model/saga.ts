import { toast } from 'react-toastify';
import { albumsActions, AlbumType, Api } from '@/entities/albums';
import { PhotoType } from '@/entities/photos';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

const baseErrors = createBaseApiErrors('albums');

export function* albumsSagaWatcher() {
  yield takeLatest('FETCH_ALBUMS', fetchAlbums);
  yield takeLatest('FETCH_ALBUM_BY_ID', fetchAlbumsById);
}

function* fetchAlbums(
  action: PayloadAction<{
    url?: string;
    filters?: { [key: string]: any };
  }>
) {
  const { data, errors }: IResponseReturn = yield call(
    Api.getData,
    action.payload?.url,
    action.payload?.filters
  );
  if (errors) {
    toast.error(baseErrors.getList);
    return;
  }
  yield data &&
    put(albumsActions.setItems((data as AlbumType<PhotoType>[]) || []));
}

function* fetchAlbumsById(
  action: PayloadAction<{
    url?: string;
    filters?: { [key: string]: any };
  }>
) {
  const { data, errors }: IResponseReturn = yield call(
    Api.getData,
    action.payload?.url,
    action.payload?.filters
  );
  if (errors) {
    toast.error(baseErrors.getById);
    return;
  }
  yield data &&
    put(albumsActions.setItem((data as AlbumType<PhotoType>) || null));
}
