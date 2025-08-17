/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    Android?: { getAccessToken?: () => string | null | undefined };
  }
}

type WaitTokenOptions = {
  timeoutMs?: number; // default 10s
  pollMs?: number; // default 30ms
};

/**
 * 네이티브 이벤트(native-token-refreshed) + 브리지 + sessionStorage를
 * 동시에 기다렸다가, 가장 먼저 들어오는 토큰을 반환한다.
 */
export function waitForNativeToken(opts: WaitTokenOptions = {}): Promise<string> {
  const { timeoutMs = 10000, pollMs = 30 } = opts;

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('window is undefined (SSR)'));
      return;
    }

    let done = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let poller: ReturnType<typeof setInterval> | null = null;

    const cleanup = () => {
      if (timer) clearTimeout(timer);
      if (poller) clearInterval(poller);
      window.removeEventListener('native-token-refreshed', onEvent as any);
    };

    const resolveOnce = (token: string) => {
      if (done) return;
      done = true;
      cleanup();
      resolve(token);
    };

    const rejectOnce = (err: Error) => {
      if (done) return;
      done = true;
      cleanup();
      reject(err);
    };

    // 1) 이벤트 리스너 (네이티브가 새 토큰을 던져줌)
    const onEvent = (e: Event) => {
      const token = (e as CustomEvent).detail?.token ?? null;
      if (token) resolveOnce(String(token));
    };
    window.addEventListener('native-token-refreshed', onEvent as any, { once: true });

    // 2) 즉시 가용 토큰 체크 (브리지 → 세션스토리지 순)
    try {
      const viaBridge = window.Android?.getAccessToken?.();
      if (viaBridge) return resolveOnce(String(viaBridge));
    } catch {
      /* empty */
    }
    try {
      const viaSession = window.sessionStorage.getItem('accessToken');
      if (viaSession) return resolveOnce(viaSession);
    } catch {
      /* empty */
    }

    // 3) 폴링 (브리지/세션스토리지)
    poller = setInterval(() => {
      try {
        const br = window.Android?.getAccessToken?.();
        if (br) return resolveOnce(String(br));
      } catch {
        /* empty */
      }
      try {
        const ss = window.sessionStorage.getItem('accessToken');
        if (ss) return resolveOnce(ss);
      } catch {
        /* empty */
      }
    }, pollMs);

    // 4) 타임아웃
    timer = setTimeout(() => {
      rejectOnce(new Error('Token refresh timeout'));
    }, timeoutMs);
  });
}
