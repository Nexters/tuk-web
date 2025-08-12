import { RestAPI, RestAPIInstance } from './rest';
import type { RestAPIConfig } from './types';

import { getBridgeSender } from '@/shared/lib/app-bridge/bridgeSender';

export { RestAPI } from './rest';
export type { RestAPIConfig, RestAPIProtocol } from './types';

const defaultJsonInstance = (baseURL: string) =>
  new RestAPIInstance(baseURL, {
    withCredentials: false,
    authHeader: () => {
      if (typeof window === 'undefined') return null;
      const token = sessionStorage.getItem('accessToken');
      return token ? { Authorization: `Bearer ${token}` } : null;
    },
    bridgeSend: msg => getBridgeSender()?.(msg),
  });

const formInstance = (baseURL: string) =>
  new RestAPIInstance(baseURL, {
    withCredentials: false,
    authHeader: () => {
      if (typeof window === 'undefined') return null;
      const token = sessionStorage.getItem('accessToken');
      return token ? { Authorization: `Bearer ${token}` } : null;
    },
    bridgeSend: msg => getBridgeSender()?.(msg),
  });

export function generateRestAPI(
  config: RestAPIConfig,
  isForm: boolean = false,
  baseURL: string = process.env.NEXT_PUBLIC_BASE_URL ?? ''
) {
  const inst = isForm ? formInstance(baseURL) : defaultJsonInstance(baseURL);
  return new RestAPI(inst, config);
}
