import { toast } from 'react-toastify';
import { Api, groupsActions, GroupType } from '@/entities/groups';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

const baseErrors = createBaseApiErrors('groups');

export function* groupsSagaWatcher() {
  yield takeLatest('FETCH_JOINED_GROUPS', fetchJoinedGroups);
  yield takeLatest('FETCH_JOINED_COUNT_GROUPS', fetchJoinedCount);
  yield takeLatest('FETCH_RECOMMENDED_GROUPS', fetchRecommendedGroups);
  yield takeLatest('JOIN_GROUP', joinGroup);
  yield takeLatest('LEAVE_GROUP', leaveGroup);
}

function* fetchJoinedGroups(
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
        groupsActions.setMergeJoined((data?.data as GroupType[]) || data || [])
      )
    : put(groupsActions.setJoined((data?.data as GroupType[]) || data || []));
}

function* fetchJoinedCount(
  action: PayloadAction<{ url?: string; filters?: { [key: string]: any } }>
) {
  const { data, errors }: IResponseReturn = yield call(
    Api.getData,
    action.payload?.url,
    {
      ...action.payload?.filters,
      isJoined: true,
    }
  );
  if (errors) {
    toast.error(baseErrors.getList);
    return;
  }
  yield data &&
    put(
      groupsActions.setJoinedCount((data?.data as GroupType[]) || data || [])
    );
}

function* fetchRecommendedGroups(
  action: PayloadAction<{ url?: string; filters?: { [key: string]: any } }>
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
    put(
      groupsActions.setRecommended((data?.data as GroupType[]) || data || [])
    );
}

function* joinGroup(
  action: PayloadAction<{ url?: string; payloadData?: { [key: string]: any } }>
) {
  const { data, errors }: IResponseReturn = yield call(
    Api.patchData,
    action.payload?.payloadData,
    action.payload?.url
  );
  if (errors) {
    toast.error(baseErrors.getList);
    return;
  }
  yield data &&
    put(groupsActions.updateItem((data?.data as GroupType) || data));
  yield put({ type: 'FETCH_JOINED_COUNT_GROUPS', payload: {} });
}

function* leaveGroup(
  action: PayloadAction<{ url?: string; payloadData?: { [key: string]: any } }>
) {
  const { data, errors }: IResponseReturn = yield call(
    Api.patchData,
    action.payload?.payloadData,
    action.payload?.url
  );
  if (errors) {
    toast.error(baseErrors.updateById);
    return;
  }
  yield data &&
    put(groupsActions.updateItem((data?.data as GroupType) || data));
  yield put({ type: 'FETCH_JOINED_COUNT_GROUPS', payload: {} });
}
