import { notificationSagaWatcher } from 'entities/notification';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([notificationSagaWatcher()]);
}
