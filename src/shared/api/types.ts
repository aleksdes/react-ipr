import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IOptionsUseRequest extends AxiosRequestConfig {
  [key: string]: any;
}

export interface IUseRequest {
  (data: any, options: IOptionsUseRequest): Promise<IResponseReturn>;
}
export interface IResponseReturn {
  data?: AxiosResponse;
  errors?: AxiosError;
}
export interface IBaseApi {
  delete(
    url: string,
    data: any,
    opts?: IOptionsUseRequest
  ): Promise<IResponseReturn>;
  get(
    url: string,
    data?: null,
    opts?: IOptionsUseRequest
  ): Promise<IResponseReturn>;
  patch(
    url: string,
    data: any,
    opts?: IOptionsUseRequest
  ): Promise<IResponseReturn>;
  post(
    url: string,
    data: any,
    opts?: IOptionsUseRequest
  ): Promise<IResponseReturn>;
  put(
    url: string,
    data: any,
    opts?: IOptionsUseRequest
  ): Promise<IResponseReturn>;
}
