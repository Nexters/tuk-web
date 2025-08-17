/* eslint-disable @typescript-eslint/no-explicit-any */

import { RestAPIConfig, RestRequestOptions, RestAPIProtocol } from './types';

import { AppBridgeMessageType } from '@/shared/lib';
import { requestTokenRefresh } from '@/shared/lib/api/auth/refreshManager';
import { APIError, wrapZodError } from '@/shared/lib/api/types';

type RestAPIInstanceInit = {
  headers?: Record<string, string>;
  withCredentials?: boolean;
  authHeader?: () => Record<string, string> | null;
  bridgeSend?: (msg: { type: string; payload: any }) => void;
};

export class RestAPIInstance {
  constructor(
    private baseURL: string,
    private init: RestAPIInstanceInit
  ) {}

  async request(input: RequestInfo, init?: RequestInit) {
    return fetch(input, init);
  }

  getBaseURL() {
    return this.baseURL;
  }

  getDefaultHeaders() {
    return this.init.headers ?? {};
  }

  getWithCredentials() {
    return this.init.withCredentials ?? true;
  }

  getAuthHeader() {
    return this.init.authHeader?.() ?? null;
  }

  getBridgeSend() {
    return this.init.bridgeSend;
  }
}

function applyPathParams(url: string, params?: Record<string, string | number>) {
  if (!params) return url;
  return url.replace(/:([A-Za-z0-9_]+)/g, (_, key) => encodeURIComponent(String(params[key])));
}

function buildQuery(query?: Record<string, any>) {
  if (!query) return '';
  const sp = new URLSearchParams();
  Object.entries(query).forEach(([k, v]) => {
    if (v === undefined) return;
    if (Array.isArray(v)) {
      v.forEach(item => sp.append(k, String(item)));
    } else {
      sp.set(k, String(v));
    }
  });
  const s = sp.toString();
  return s ? `?${s}` : '';
}

async function readBody(res: Response, parseAs: 'json' | 'text' | 'blob') {
  if (parseAs === 'text') return res.text();
  if (parseAs === 'blob') return res.blob();
  return res.json().catch(() => ({}));
}

export class RestAPI implements RestAPIProtocol {
  constructor(
    private instance: RestAPIInstance,
    private config: RestAPIConfig
  ) {}

  private async core<T>(method: string, opts: RestRequestOptions<T>): Promise<T> {
    const {
      url,
      param,
      query,
      data,
      headers,
      timeoutMs,
      parseAs = 'json',
      validate,
      signal,
      credentials,
    } = opts;
    const path = applyPathParams(url, param);
    const basePrefix = this.config.baseURL ? `/${this.config.baseURL}` : '';
    const fullUrl = `${this.instance.getBaseURL()}${basePrefix}/${path.replace(/^\/+/, '')}${buildQuery(query)}`;

    const controller = new AbortController();
    const timer = timeoutMs ? setTimeout(() => controller.abort(), timeoutMs) : undefined;

    const methodUpper = method.toUpperCase();
    const isGetLike = methodUpper === 'GET' || methodUpper === 'HEAD';

    const hdr: Record<string, string> = {
      ...this.instance.getDefaultHeaders(),
      ...(headers ?? {}),
      ...(this.instance.getAuthHeader() ?? {}),
    };

    if (isGetLike && 'Content-Type' in hdr) delete hdr['Content-Type'];

    const reqInit: RequestInit = {
      method: methodUpper,
      headers: hdr,
      credentials: credentials ?? (this.instance.getWithCredentials() ? 'include' : 'same-origin'),
      signal: signal ?? controller.signal,
    };

    if (!isGetLike && data !== undefined) {
      const isForm = hdr['Content-Type'] === 'multipart/form-data';
      if (isForm) {
        delete hdr['Content-Type'];
        reqInit.body = data;
      } else {
        if (!hdr['Content-Type']) hdr['Content-Type'] = 'application/json';
        reqInit.body = JSON.stringify(data);
      }
    }

    if (data !== undefined && methodUpper !== 'GET') {
      const isForm =
        (reqInit.headers as Record<string, string>)['Content-Type'] === 'multipart/form-data';
      reqInit.body = isForm ? data : JSON.stringify(data);
      if (isForm) {
        delete (reqInit.headers as Record<string, string>)['Content-Type'];
      }
    }

    try {
      const res = await this.instance.request(fullUrl, reqInit);
      if (!res.ok) {
        if (res.status === 401) {
          const bridge = this.instance.getBridgeSend();
          if (bridge) {
            try {
              // 네이티브에 갱신 요청 (중복이면 기존 대기 재사용)
              await requestTokenRefresh(
                () => bridge({ type: AppBridgeMessageType.REQUEST_TOKEN_REFRESH, payload: '' }),
                10000 // 타임아웃 10초
              );

              // 새 토큰으로 헤더 갱신 후 1회 재시도
              const refreshedHdr = {
                ...hdr,
                ...(this.instance.getAuthHeader() ?? {}),
              };
              const retry = await this.instance.request(fullUrl, {
                ...reqInit,
                headers: refreshedHdr,
              });

              if (!retry.ok) {
                const text = await retry.text().catch(() => '');
                throw new APIError(text || retry.statusText, {
                  status: retry.status,
                  meta: { errorType: 'HTTP_ERROR', errorMessage: text || retry.statusText },
                  url: fullUrl,
                  method: methodUpper,
                });
              }
              const retryBody = await readBody(retry, parseAs);
              const isEnvelope2 =
                retryBody &&
                typeof retryBody === 'object' &&
                'success' in retryBody &&
                'data' in retryBody;
              const payload2 = isEnvelope2 ? (retryBody as any).data : retryBody;

              if (validate) {
                try {
                  return validate(payload2);
                } catch (err) {
                  wrapZodError(err, fullUrl, methodUpper);
                }
              }
              return payload2 as T;
            } catch {
              // intentionally ignored
            }
          }
        }

        const text = await res.text().catch(() => '');

        throw new APIError(text || res.statusText, {
          status: res.status,
          meta: { errorType: 'HTTP_ERROR', errorMessage: text || res.statusText },
          url: fullUrl,
          method: methodUpper,
        });
      }

      const body = await readBody(res, parseAs);

      // envelope 자동 인식
      const isEnvelope = body && typeof body === 'object' && 'success' in body && 'data' in body;
      const payload = isEnvelope ? (body as any).data : body;

      if (validate) {
        try {
          // zod.parse 호출 (validate에 parse를 직접 넣어줬으므로)
          return validate(payload);
        } catch (err) {
          // ZodError를 APIError로 감싸고 자세히 찍힘
          wrapZodError(err, fullUrl, methodUpper);
        }
      }

      return payload as T;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  get<T>(opts: RestRequestOptions<T>) {
    return this.core<T>('GET', opts);
  }
  post<T>(opts: RestRequestOptions<T>) {
    return this.core<T>('POST', opts);
  }
  put<T>(opts: RestRequestOptions<T>) {
    return this.core<T>('PUT', opts);
  }
  patch<T>(opts: RestRequestOptions<T>) {
    return this.core<T>('PATCH', opts);
  }
  delete<T>(opts: RestRequestOptions<T>) {
    return this.core<T>('DELETE', opts);
  }
}
