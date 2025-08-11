// utils/rest/index.ts
import { RestAPI, RestAPIInstance } from './rest';
import type { RestAPIConfig } from './types';

export { RestAPI } from './rest';
export type { RestAPIConfig, RestAPIProtocol } from './types';

const defaultJsonInstance = (baseURL: string) =>
  new RestAPIInstance(baseURL, {
    // headers: { 'Content-Type': 'application/json' },
    withCredentials: false,
  });

const formInstance = (baseURL: string) =>
  new RestAPIInstance(baseURL, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  });

export function generateRestAPI(
  config: RestAPIConfig,
  isForm: boolean = false,
  baseURL: string = process.env.NEXT_PUBLIC_BASE_URL ?? ''
) {
  const inst = isForm ? formInstance(baseURL) : defaultJsonInstance(baseURL);
  return new RestAPI(inst, config);
}
