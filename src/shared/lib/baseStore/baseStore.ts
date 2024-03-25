import { IResponseReturn } from '@/shared/api';
import {
  IBaseStore,
  IBaseStoreActions,
  IPagination,
} from '@/shared/lib/baseStore/types.ts';

import type { PayloadAction } from '@reduxjs/toolkit';

export const baseStore = <T>(): IBaseStore<T> => ({
  meta: {
    _limit: 10,
    _page: 1,
    total: 0,
  },
  loading: false,
  item: null,
  items: [],
});

export const baseReducers = <T>(): IBaseStoreActions<T> => ({
  setData: (state: IBaseStore<T>, action: PayloadAction<IResponseReturn>) => {
    if (action.payload) {
      if (Array.isArray(action.payload.data)) {
        state.items = action.payload?.data || [];
        return;
      }
    }
  },
  setItems: (state: IBaseStore<T>, action: PayloadAction<T[] | []>) => {
    state.items = action.payload;
  },
  setItem: (state: IBaseStore<T>, action: PayloadAction<T>) => {
    state.item = action.payload;
  },
  setMeta: (state: IBaseStore<T>, action: PayloadAction<IPagination>) => {
    state.meta = action.payload;
  },
  resetItem: (state: IBaseStore<T>) => {
    state.item = null;
  },
  resetItems: (state: IBaseStore<T>) => {
    state.items = [];
  },
  resetMeta: (state: IBaseStore<T>) => {
    state.meta = {
      _limit: 10,
      _page: 1,
      total: 0,
    };
  },
  resetStore: (state: IBaseStore<T>) => {
    state.item = null;
    state.items = [];
  },
});
