import { toast } from 'react-toastify';
import {
  Api,
  fetchFriendsCountAction,
  friendsActions,
  type FriendType,
} from '@/entities/friends';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
const baseErrors = createBaseApiErrors('friends');

export function* friendsSagaWatcher() {
  yield takeLatest('FETCH_FRIENDS', fetchFriends);
  yield takeLatest('FETCH_FRIENDS_COUNT', fetchFriendsCount);
  yield takeLatest('DELETE_FRIEND', deleteFriends);
}

function* fetchFriends(
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
    toast.error(baseErrors.getList);
    return;
  }
  yield data && action.payload.isInfinite
    ? put(
        friendsActions.setMergeFriends(
          (data?.data as FriendType[]) || data || []
        )
      )
    : put(friendsActions.setItems((data?.data as FriendType[]) || data || []));
}

function* fetchFriendsCount(
  action: PayloadAction<{
    url?: string;
    filters?: { [key: string]: any };
  }>
) {
  const { data, errors }: IResponseReturn<FriendType[]> = yield call(
    Api.getData,
    action.payload?.url,
    action.payload?.filters
  );
  if (errors) {
    return;
  }
  yield data &&
    put(friendsActions.setTotal((data as FriendType[])?.length || 0));
}

function* deleteFriends(
  action: PayloadAction<{
    url?: string;
  }>
) {
  const { errors }: IResponseReturn = yield call(
    Api.deleteData,
    {},
    `/${action.payload?.url}`
  );
  if (errors) {
    toast.error(baseErrors.removeById);
    return;
  }
  yield action.payload.url &&
    put(friendsActions.deleteItemById(action.payload?.url));
  yield put(fetchFriendsCountAction());
}
