import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

export const appStore = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_DEV_MODE !== 'production',
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
