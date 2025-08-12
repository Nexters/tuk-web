import { waitForNativeToken } from './waitToken';

type RefreshState = {
  refreshing: boolean;
  promise: Promise<string> | null;
};

const state: RefreshState = {
  refreshing: false,
  promise: null,
};

export function requestTokenRefresh(trigger: () => void, timeoutMs?: number) {
  if (state.refreshing && state.promise) return state.promise;

  sessionStorage.removeItem('accessToken');

  state.refreshing = true;
  trigger();

  state.promise = waitForNativeToken(timeoutMs).finally(() => {
    state.refreshing = false;
    setTimeout(() => {
      state.promise = null;
    }, 0);
  });

  return state.promise;
}
