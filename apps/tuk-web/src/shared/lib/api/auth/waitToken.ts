/* eslint-disable @typescript-eslint/no-explicit-any */

export function waitForNativeToken(timeoutMs = 10000): Promise<string> {
  return new Promise((resolve, reject) => {
    const onToken = (e: Event) => {
      const token = (e as CustomEvent).detail?.token ?? sessionStorage.getItem('accessToken');
      cleanup();
      if (token) resolve(token);
      else reject(new Error('Token event received but empty'));
    };
    const onTimeout = () => {
      cleanup();
      reject(new Error('Token refresh timeout'));
    };
    const cleanup = () => {
      window.removeEventListener('native-token-refreshed', onToken as any);
      clearTimeout(timer);
    };

    window.addEventListener('native-token-refreshed', onToken as any, { once: true });

    const existing = sessionStorage.getItem('accessToken');
    if (existing) {
      cleanup();
      resolve(existing);
      return;
    }

    const timer = setTimeout(onTimeout, timeoutMs);
  });
}
