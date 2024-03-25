import { IResponseReturn } from '@/shared/api';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface IPagination {
  _limit: number;
  _page: number;
  total: number;
}
export interface IBaseStore<T> {
  meta: IPagination;
  loading: boolean;
  item: T | null;
  items: T[] | [];
  [key: string]: any;
}

export interface IBaseStoreActions<T> {
  setData: (
    state: IBaseStore<T>,
    action: PayloadAction<IResponseReturn>
  ) => void;
  setItems: (state: IBaseStore<T>, action: PayloadAction<T[]>) => void;
  setItem: (state: IBaseStore<T>, action: PayloadAction<T>) => void;
  setMeta: (state: IBaseStore<T>, action: PayloadAction<IPagination>) => void;
  resetItem: (state: IBaseStore<T>) => void;
  resetItems: (state: IBaseStore<T>) => void;
  resetStore: (state: IBaseStore<T>) => void;
  [key: string]: any;
}
