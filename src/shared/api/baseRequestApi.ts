import { IResponseReturn, useApi } from '@/shared/api';
import { filterParamsRequest } from '@/shared/lib/filterParamsRequest.ts';

interface IBaseRequestApi {
  getData: (
    url?: string,
    filters?: { [key: string]: any }
  ) => Promise<IResponseReturn>;
  postData: (payload: any, url?: string) => Promise<IResponseReturn>;
  putData: (payload: any, url?: string) => Promise<IResponseReturn>;
  patchData: (payload: any, url?: string) => Promise<IResponseReturn>;
  deleteData: (url?: string) => Promise<IResponseReturn>;
}

export function baseRequestApi(apiUrl: string): IBaseRequestApi {
  return {
    getData: async (url = '', filters = {}) => {
      return await useApi.get(apiUrl + url, null, {
        params: filterParamsRequest(filters),
      });
    },

    postData: async (payload: any, url?: string) => {
      return await useApi.post(apiUrl + url, payload);
    },

    putData: async (payload: any, url?: string) => {
      return await useApi.put(apiUrl + url, payload);
    },

    patchData: async (payload: any, url?: string) => {
      return await useApi.patch(apiUrl + url, payload);
    },

    deleteData: async (url = '') => {
      return await useApi.delete(apiUrl + url, null);
    },
  };
}
