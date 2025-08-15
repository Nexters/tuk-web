/* eslint-disable @typescript-eslint/no-explicit-any */

// export function waitForNativeToken(timeoutMs = 3000): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const onToken = (e: Event) => {
//       const token = (e as CustomEvent).detail?.token ?? sessionStorage.getItem('accessToken');
//       cleanup();
//       if (token) resolve(token);
//       else reject(new Error('Token event received but empty'));
//     };
//     const onTimeout = () => {
//       cleanup();
//       reject(new Error('Token refresh timeout'));
//     };
//     const cleanup = () => {
//       window.removeEventListener('native-token-refreshed', onToken as any);
//       clearTimeout(timer);
//     };

//     window.addEventListener('native-token-refreshed', onToken as any, { once: true });

//     const existing = sessionStorage.getItem('accessToken');
//     if (existing) {
//       cleanup();
//       resolve(existing);
//       return;
//     }

//     const timer = setTimeout(onTimeout, timeoutMs);
//   });
// }

export function waitForNativeToken(timeoutMs = 10000): Promise<string> {
  return new Promise((resolve, reject) => {
    let done = false;
    const finish = (tok?: string, err?: Error) => {
      if (done) return;
      done = true;
      cleanup();
      if (tok) resolve(tok);
      else reject(err ?? new Error('Token refresh timeout'));
    };

    const onCustom = (e: Event) => {
      const token = (e as CustomEvent).detail?.token ?? sessionStorage.getItem('accessToken');
      if (token) finish(token);
    };

    const onPoll = () => {
      const t = sessionStorage.getItem('accessToken');
      if (t) finish(t);
    };

    const cleanup = () => {
      window.removeEventListener('native-token-refreshed', onCustom as any);
      clearInterval(pollId);
      clearTimeout(timer);
    };

    // 즉시 체크
    const existing = sessionStorage.getItem('accessToken');
    if (existing) return finish(existing);

    window.addEventListener('native-token-refreshed', onCustom as any, { once: true });

    // 폴링(짧고 가벼움)
    const pollId = setInterval(onPoll, 100);

    const timer = setTimeout(() => finish(undefined), timeoutMs);
  });
}
