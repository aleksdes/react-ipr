import { toast } from 'react-toastify';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { Api } from '../api';
import { photosActions } from './slice.ts';
import { PhotoType } from './type.ts';

const baseErrors = createBaseApiErrors('photos');

export function* photosSagaWatcher() {
  yield takeLatest('FETCH_PHOTOS', fetchPhotos);
}

function* fetchPhotos(
  action: PayloadAction<{ url?: string; filters?: { [key: string]: any } }>
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
  yield data && put(photosActions.setItems((data as PhotoType[]) || []));
}
