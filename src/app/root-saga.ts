import { notificationSagaWatcher } from '@/entities/notification';
import { photosSagaWatcher } from '@/entities/photos';
import { postsSagaWatcher } from '@/entities/posts';
import { sessionUserSagaWatcher } from '@/entities/user';

import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([
    notificationSagaWatcher(),
    sessionUserSagaWatcher(),
    photosSagaWatcher(),
    postsSagaWatcher(),
  ]);
}
