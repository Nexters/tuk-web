/* eslint-disable @typescript-eslint/no-explicit-any */
// utils/rest/types.ts
export type PathParams = Record<string, string | number>;
export type QueryParams = Record<
  string,
  string | number | boolean | (string | number | boolean)[] | undefined
>;

export type RestAPIConfig = {
  baseURL?: string; // 각 서비스별 prefix (예: 'activity')
};

export type RestRequestOptions<T> = {
  url: string; // 'activity/:activityId/mentor'
  param?: PathParams; // { activityId }
  query?: QueryParams; // { page, size, role }
  data?: any; // body
  headers?: Record<string, string>;
  timeoutMs?: number;
  parseAs?: 'json' | 'text' | 'blob';
  validate?: (input: any) => T; // zodSchema.parse
  // fetch 레벨 설정
  signal?: AbortSignal;
  credentials?: RequestCredentials;
  method?: string; // 내부용
};

export interface RestAPIProtocol {
  get<T = unknown>(opts: RestRequestOptions<T>): Promise<T>;
  post<T = unknown>(opts: RestRequestOptions<T>): Promise<T>;
  put<T = unknown>(opts: RestRequestOptions<T>): Promise<T>;
  patch<T = unknown>(opts: RestRequestOptions<T>): Promise<T>;
  delete<T = unknown>(opts: RestRequestOptions<T>): Promise<T>;
}
