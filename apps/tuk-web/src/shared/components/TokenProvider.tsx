/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { readTokenOnce, waitToken } from '@/shared/lib/api/auth/token-gateway';

type Ctx = { token: string | null; ready: boolean; setToken: (t: string) => void };
const TokenCtx = createContext<Ctx | null>(null);

export function useToken() {
  const ctx = useContext(TokenCtx);
  if (!ctx) throw new Error('TokenProvider missing');
  return ctx;
}

export default function TokenProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [token, setTokenState] = useState<string | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    // 1) 최초 대기
    waitToken({ timeoutMs: 10000 })
      .then(t => {
        if (!mounted.current) return;
        setTokenState(t);
        setReady(true);
      })
      .catch(() => {
        // 타임아웃이어도 혹시 그 사이 들어왔는지 마지막 확인
        const t = readTokenOnce();
        setTokenState(t);
        setReady(true); // ready = true로 바꿔서 UI는 열지만, token 없으면 enabled=false로 쿼리 막힘
      });

    // 2) 이후 네이티브 갱신 이벤트를 계속 반영
    const onEvent = (e: Event) => {
      const t = (e as CustomEvent).detail?.token as string | undefined;
      if (t) setTokenState(t);
    };
    window.addEventListener('native-token-refreshed', onEvent as any);
    return () => {
      mounted.current = false;
      window.removeEventListener('native-token-refreshed', onEvent as any);
    };
  }, []);

  const setToken = (t: string) => {
    try {
      sessionStorage.setItem('accessToken', t);
    } catch {
      /* empty */
    }
    setTokenState(t);
  };

  return (
    <TokenCtx.Provider value={{ token, ready, setToken }}>
      {/* ready=false면 아무것도 렌더하지 않음(최초 쿼리 발사 차단) */}
      {ready ? children : null}
    </TokenCtx.Provider>
  );
}
