import { toast } from 'react-toastify';
import { Api, NotificationType } from '@/entities/notification';
import { notificationsActions } from '@/entities/notification';
import { IResponseReturn } from '@/shared/api';
import { createBaseApiErrors } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

const baseErrors = createBaseApiErrors('notifications');

export function* notificationSagaWatcher() {
  yield takeLatest('FETCH_NOTIFICATIONS_COUNTER', fetchNotificationsCounter);
  yield takeLatest('FETCH_NOTIFICATIONS', fetchNotifications);
  yield takeEvery('UPDATE_NOTIFICATIONS', updateNotifications);
}

function* fetchNotifications(
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
  yield data && put(notificationsActions.setData({ data, errors }));
}

function* fetchNotificationsCounter(
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
  const count: number = (data && Array.isArray(data) && data?.length) || 0;
  yield data && put(notificationsActions.updateCounter(count));
}

function* updateNotifications(
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
    put(
      notificationsActions.readNotification(
        (data?.data as NotificationType) || data
      )
    );
}
