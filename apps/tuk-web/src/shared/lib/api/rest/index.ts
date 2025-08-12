// utils/rest/index.ts
import { RestAPI, RestAPIInstance } from './rest';
import type { RestAPIConfig } from './types';

export { RestAPI } from './rest';
export type { RestAPIConfig, RestAPIProtocol } from './types';

// const defaultJsonInstance = (baseURL: string) =>
//   new RestAPIInstance(baseURL, {
//     withCredentials: false,
//     authHeader: () => {
//       if (typeof window === 'undefined') return null;
//       // const token = sessionStorage.getItem('accessToken');
//       // return token ? { Authorization: `Bearer ${token}` } : null;

//       return {
//         Authorization: `Bearer
// eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMiIsIm1lbWJlcklkIjoiMzIiLCJ0b2tlblR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE3NTUwMDM4NTQsImV4cCI6MTc1NzU5NTg1NH0.sXHpNsim8-nIUdCjnAcOIZGsg2gUo8rnpkBmN-z5dKU`,
//       };
//     },
//   });

const defaultJsonInstance = (baseURL: string) =>
  new RestAPIInstance(baseURL, {
    withCredentials: false,
    authHeader: () => {
      if (typeof window === 'undefined') return null;
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMiIsIm1lbWJlcklkIjoiMzIiLCJ0b2tlblR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE3NTUwMDM4NTQsImV4cCI6MTc1NzU5NTg1NH0.sXHpNsim8-nIUdCjnAcOIZGsg2gUo8rnpkBmN-z5dKU';
      return token ? { Authorization: `Bearer ${token.trim()}` } : null;
    },
  });

const formInstance = (baseURL: string) =>
  new RestAPIInstance(baseURL, {
    withCredentials: false,
    authHeader: () => {
      if (typeof window === 'undefined') return null;
      const token = sessionStorage.getItem('accessToken');
      return token ? { Authorization: `Bearer ${token}` } : null;
    },
  });

export function generateRestAPI(
  config: RestAPIConfig,
  isForm: boolean = false,
  baseURL: string = process.env.NEXT_PUBLIC_BASE_URL ?? ''
) {
  const inst = isForm ? formInstance(baseURL) : defaultJsonInstance(baseURL);
  return new RestAPI(inst, config);
}
