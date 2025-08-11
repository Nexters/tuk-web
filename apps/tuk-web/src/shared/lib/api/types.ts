/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';

import { APIError } from './error';

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface URLProps {
  [p: string]: string | number | undefined;
}

export interface APIProps<T extends (response: any) => any | Promise<any>> {
  url?: string | number | null;
  config?: AxiosRequestConfig;
  param?: string | number | { [key: string]: string | number };
  query?: URLProps;
  data?: any;
  validate?: T;
}

export type SetAPIErrorCallback = <T extends Error>(error: APIError) => T;

export interface RestAPIInstanceConfig extends AxiosRequestConfig {
  setAPIError?: SetAPIErrorCallback;
  legacy?: boolean;
}

export type ResponsePipe = (response: any) => any;

export interface RestAPIConfig extends AxiosRequestConfig {
  responsePipe?: ResponsePipe;
}

type RestMethod = <T extends (response: any) => any>(props: APIProps<T>) => Promise<ReturnType<T>>;

export interface RestAPIProtocol {
  fetch: <T extends (response: any) => any>(
    method: HttpMethod,
    props: APIProps<T>
  ) => Promise<ReturnType<T>>;
  get: RestMethod;
  post: RestMethod;
  patch: RestMethod;
  put: RestMethod;
  delete: RestMethod;
}

export type PaginationQuery = {
  page: number;
  pageSize: number;
};
