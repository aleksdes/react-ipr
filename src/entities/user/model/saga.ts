import { toast } from 'react-toastify';
import {
  Api,
  ApiProfile,
  ProfileUserType,
  SessionUserType,
} from '@/entities/user';
import { sessionUserActions } from '@/entities/user';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

const baseErrors = createBaseApiErrors('user');

export function* sessionUserSagaWatcher() {
  yield takeLatest('FETCH_SESSION_USER', fetchSessionUser);
  yield takeLatest('FETCH_PROFILE_INFO', fetchProfileInfo);
}

function* fetchSessionUser(
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
  yield data &&
    put(
      sessionUserActions.setSessionUser(
        (data?.data as SessionUserType) || data || null
      )
    );
}

function* fetchProfileInfo(
  action: PayloadAction<{ url?: string; filters?: { [key: string]: any } }>
) {
  const { data, errors }: IResponseReturn = yield call(
    ApiProfile.getData,
    action.payload?.url,
    action.payload?.filters
  );
  if (errors) {
    toast.error(baseErrors.getById);
    return;
  }
  yield data &&
    put(
      sessionUserActions.setProfileInfo(
        (data?.data as ProfileUserType) || data || null
      )
    );
}
