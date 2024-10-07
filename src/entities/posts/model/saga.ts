import { toast } from 'react-toastify';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { Api } from '../api';
import { postsActions } from './slice.ts';
import { PostType } from './type.ts';

const baseErrors = createBaseApiErrors('posts');

export function* postsSagaWatcher() {
  yield takeLatest('FETCH_POSTS', fetchPosts);
}

function* fetchPosts(
  action: PayloadAction<{
    url?: string;
    filters?: { [key: string]: any };
    isInfinite: boolean;
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
  yield data && action.payload.isInfinite
    ? put(postsActions.setMergePosts((data?.data as PostType[]) || data || []))
    : put(postsActions.setPosts((data?.data as PostType[]) || data || []));
}