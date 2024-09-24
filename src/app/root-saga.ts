import { notificationSagaWatcher } from '@/entities/notification';
import { sessionUserSagaWatcher } from '@/entities/user';

import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([notificationSagaWatcher(), sessionUserSagaWatcher()]);
}
