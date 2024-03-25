import type {
  IBaseApi,
  IOptionsUseRequest,
  IResponseReturn,
  IUseRequest,
} from '@/shared/api/types.ts';

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

const getRequest: IUseRequest = async (
  data = null,
  options: IOptionsUseRequest
) => {
  let response: IResponseReturn = {};

  let headers = options?.headers || {};
  headers = {
    ...headers,
    'Content-Type': 'application/json; charset=utf-8',
    ...(options.token && {
      Authorization: `Bearer ${options.token}`,
    }),
    ...(options.userAgent && {
      'User-Agent': options.userAgent,
    }),
    ...(options.cookies && {
      Cookie: options.cookies,
    }),
  };

  if (options.method !== 'get' && data) {
    if (typeof FormData !== 'undefined' && data instanceof FormData) {
      headers = { ...headers, 'Content-Type': 'multipart/form-data' };
    }
  }

  try {
    response = await api({
      ...options,
      headers: headers,
      data,
    });
  } catch (error: any) {
    console.error(error);
    response.errors = error;
  }

  return response;
};

export const useApi: IBaseApi = {
  delete(url: string, data = null, opts = {}) {
    return getRequest(data, {
      method: 'delete',
      url,
      ...opts,
    });
  },

  get(url: string, data = null, opts = {}) {
    return getRequest(data, {
      method: 'get',
      url,
      ...opts,
    });
  },

  patch(url: string, data = null, opts = {}) {
    return getRequest(data, {
      method: 'patch',
      url,
      ...opts,
    });
  },

  post(url: string, data = null, opts = {}) {
    return getRequest(data, {
      method: 'post',
      url,
      ...opts,
    });
  },

  put(url: string, data = null, opts = {}) {
    return getRequest(data, {
      method: 'put',
      url,
      ...opts,
    });
  },
};

export { api };
