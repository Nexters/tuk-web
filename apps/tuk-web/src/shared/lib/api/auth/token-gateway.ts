/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Android?: { getAccessToken?: () => string | null | undefined };
  }
}

type WaitOpts = { timeoutMs?: number; pollMs?: number };

export function readTokenOnce(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const b = window.Android?.getAccessToken?.();
    if (b) return String(b);
  } catch {
    /* empty */
  }
  try {
    const s = window.sessionStorage.getItem('accessToken');
    if (s) return s;
  } catch {
    /* empty */
  }
  return null;
}

export function waitToken({ timeoutMs = 10000, pollMs = 30 }: WaitOpts = {}): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('SSR'));
    let done = false;
    const finish = (t: string) => {
      if (!done) {
        done = true;
        cleanup();
        resolve(t);
      }
    };
    const fail = (e: Error) => {
      if (!done) {
        done = true;
        cleanup();
        reject(e);
      }
    };

    const onEvent = (e: Event) => {
      const t = (e as CustomEvent).detail?.token;
      if (t) finish(String(t));
    };
    window.addEventListener('native-token-refreshed', onEvent as any, { once: true });

    const immediate = readTokenOnce();
    if (immediate) return finish(immediate);

    const poller = setInterval(() => {
      const t = readTokenOnce();
      if (t) finish(t);
    }, pollMs);

    const timer = setTimeout(() => fail(new Error('Token timeout')), timeoutMs);

    function cleanup() {
      clearInterval(poller);
      clearTimeout(timer);
      window.removeEventListener('native-token-refreshed', onEvent as any);
    }
  });
}
