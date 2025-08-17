import { waitForNativeToken } from './waitToken';

type RefreshState = {
  refreshing: boolean;
  promise: Promise<string> | null;
};

const state: RefreshState = {
  refreshing: false,
  promise: null,
};

/**
 * 네이티브에 토큰 갱신을 요청하고, 싱글플라이트로 새 토큰을 기다린다.
 * - 세션스토리지를 선삭제하지 않는다(레이스 생성 금지).
 * - 이미 갱신 중이면 기존 프로미스를 그대로 반환.
 */
export function requestTokenRefresh(trigger: () => void, timeoutMs?: number) {
  if (state.refreshing && state.promise) return state.promise;

  state.refreshing = true;
  try {
    trigger(); // 네이티브에 "토큰 갱신" 요청
  } catch {
    // 트리거 실패해도 대기는 시도
  }

  state.promise = waitForNativeToken({ timeoutMs }).finally(() => {
    state.refreshing = false;
    // 바로 null로 만들면 동시 tick에서 참조 레이스가 있을 수 있어 다음 마이크로태스크로 밀기
    setTimeout(() => {
      state.promise = null;
    }, 0);
  });

  return state.promise;
}
