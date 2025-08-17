/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Android?: { getAccessToken?: () => string | null | undefined };
  }
}

/** 네이티브 브리지 → 세션스토리지 순으로 토큰을 읽는다 */
export function readAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const viaBridge = window.Android?.getAccessToken?.();
    if (viaBridge) return String(viaBridge);
  } catch {
    /* empty */
  }
  try {
    const viaSession = window.sessionStorage.getItem('accessToken');
    if (viaSession) return viaSession;
  } catch {
    /* empty */
  }
  return null;
}

/** Authorization 헤더 생성 (없으면 빈 객체) */
export function makeAuthHeader(): { Authorization: string } | Record<string, never> {
  const t = readAccessToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}
