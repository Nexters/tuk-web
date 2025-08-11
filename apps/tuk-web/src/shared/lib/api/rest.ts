/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { isNullish } from '../common/utils';

import { APIError } from './error';
import {
  APIProps,
  HttpMethod,
  ResponsePipe,
  RestAPIConfig,
  RestAPIInstanceConfig,
  RestAPIProtocol,
  SetAPIErrorCallback,
} from './types';

type RestCallBack = (response: any) => any;

export class RestAPIInstance {
  private _api!: AxiosInstance;
  private setAPIErrorCallback: SetAPIErrorCallback | null = null;

  constructor(
    protected baseURL: string,
    { setAPIError, ...config }: RestAPIInstanceConfig = {}
  ) {
    this._api = axios.create({
      baseURL,
      ...config,
    });

    if (setAPIError) {
      this.setAPIErrorCallback = setAPIError;
    }

    this.initAjax();
  }

  private initAjax() {
    this._api.interceptors.request.use(async config => {
      if (typeof window !== 'undefined') {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('session_key'))
          ?.split('=')[1];

        if (token) {
          config.headers.Authorization = token;
        }
      }

      return config;
    });

    this._api.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error: AxiosError) => {
        if (error.response) {
          const { status, data } = error.response as any;

          if (
            data &&
            typeof data === 'object' &&
            Object.prototype.hasOwnProperty.call(data, 'message')
          ) {
            const errorData = data as { message: string };

            if (this.setAPIErrorCallback) {
              return Promise.reject(
                this.setAPIErrorCallback(new APIError(errorData.message, status, data))
              );
            }

            return Promise.reject(new APIError(errorData.message as string, status, data));
          }

          if (this.setAPIErrorCallback) {
            return Promise.reject(
              this.setAPIErrorCallback(new APIError('API Response Error', status, data))
            );
          }

          return Promise.reject(new APIError('API Response Error', status, data));
        } else if (error.request) {
          return Promise.reject(new APIError('No Response from Server', null, null));
        } else {
          return Promise.reject(new APIError(error.message, null, null));
        }
      }
    );
  }

  get api() {
    return this._api;
  }
}

export class RestAPI implements RestAPIProtocol {
  private instance!: RestAPIInstance;
  private baseURL: string | null = null;
  private responsePipe: ResponsePipe = (response: any) => response;
  private config: Omit<RestAPIConfig, 'baseURL' | 'responsePipe'> = {};

  constructor(
    APIInstance: RestAPIInstance,
    { baseURL, responsePipe, ...config }: RestAPIConfig = {}
  ) {
    this.instance = APIInstance;
    this.config = config;

    if (baseURL && typeof baseURL === 'string' && baseURL !== '') {
      this.baseURL = baseURL;
    }

    if (typeof responsePipe === 'function') {
      this.responsePipe = responsePipe;
    }
  }

  private substituteParamsInURL(
    url: string,
    params?: string | number | { [key: string]: string | number }
  ): string {
    if (!params || params === '') {
      return url;
    }

    if (typeof params !== 'object') {
      const param = `${params}`.trim();

      return `${url}/${param}`;
    }

    return url
      .split('/')
      .map(target => {
        if (!target.startsWith(':')) {
          return target;
        }

        const param = params[target.slice(1)];

        if (!param) {
          return target;
        }

        return `${param}`;
      })
      .join('/');
  }

  private normalizeURL(url?: string | number | null) {
    if (!url) {
      return '';
    }

    if (typeof url === 'number') {
      return `${url}`;
    }

    const trimmedURL = url.trim();

    return trimmedURL.startsWith('/') ? url.slice(1) : url;
  }

  private constructFullURL(
    url?: string | number | null,
    param?: string | number | { [key: string]: string | number }
  ) {
    const normalizedURL = this.normalizeURL(url);
    const finalURL = this.substituteParamsInURL(normalizedURL, param);

    return this.baseURL ? `${this.baseURL}/${finalURL}` : finalURL;
  }

  public async fetch<T extends RestCallBack>(
    method: HttpMethod,
    { url, data, param, query, config = {}, validate }: APIProps<T>
  ): Promise<ReturnType<T>> {
    const mergedURL = this.constructFullURL(url, param);

    try {
      const response = this.responsePipe(
        await this.instance.api({
          ...this.config,
          url: mergedURL,
          method,
          data,
          params: query,
          ...config,
        })
      );

      if (validate) {
        return validate(response);
      }

      return response as ReturnType<T>;
    } catch (error) {
      if (error instanceof APIError) {
        return Promise.reject(error);
      }

      return Promise.reject(new APIError('validate error', null, error, String(url)));
    }
  }

  public get<T extends RestCallBack>(props: Omit<APIProps<T>, 'data'>) {
    return this.fetch('get', props);
  }

  public post<T extends RestCallBack>(props: APIProps<T>) {
    return this.fetch('post', props);
  }

  public patch<T extends RestCallBack>(props: APIProps<T>) {
    return this.fetch('patch', props);
  }

  public put<T extends RestCallBack>(props: APIProps<T>) {
    return this.fetch('put', props);
  }

  public delete<T extends RestCallBack>(props: APIProps<T>) {
    return this.fetch('delete', props);
  }
}
