import { UserAgent } from '@/shared/components/provider/UserAgentProvider';

const FALL_BACK_DELAY_MS = 1500;

const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.plottwist.tuk';
const IOS_STORE_URL_WEB =
  'https://apps.apple.com/kr/app/%ED%88%AD-%EB%A7%8C%EB%82%8C%EC%9D%84-%EB%84%8C%EC%A7%80%EC%8B%9C/id6749781762';
const IOS_STORE_URL_APPS = 'itms-apps://itunes.apple.com/app/id6749781762';

const GATHERING_DEEP_LINK = (gatheringId: number) =>
  `tuk-app://tuk/join-gathering?gatheringId=${gatheringId}`;

const PROPOSAL_DEEP_LINK = (proposalId: number) => `tuk-app://tuk/proposal-detail/${proposalId}`;

export const joinProposalInAPP = (proposalId: number, userAgent: UserAgent) => {
  if (userAgent.isAndroid) {
    window.location.href = generateAndroidIntentURL(
      `tuk/proposal-detail/${proposalId}`,
      ANDROID_STORE_URL
    );

    return;
  }

  if (userAgent.isIOS) {
    appendIOSIframe(PROPOSAL_DEEP_LINK(proposalId));
  }

  window.location.href = IOS_STORE_URL_WEB;
};

// 안드로이드는 ㅑnitent 딥링크 사용
// IOS는 iframe 내부 강제 리다이렉트 로직 때문에 추가 로직 구성
export const joinGatheringInAPP = (gatheringId: number, userAgent: UserAgent) => {
  // AOS deep link
  if (userAgent.isAndroid) {
    window.location.href = generateAndroidIntentURL(
      `tuk/join-gathering?gatheringId=${gatheringId}`,
      ANDROID_STORE_URL
    );

    return;
  }

  // IOS deep link
  if (userAgent.isIOS) {
    // iframe 강제 리다이렉트
    appendIOSIframe(GATHERING_DEEP_LINK(gatheringId));
  }

  window.location.href = IOS_STORE_URL_WEB;
};

export const joinHomeInAPP = (userAgent: UserAgent) => {
  if (userAgent.isAndroid) {
    window.location.href = generateAndroidIntentURL('tuk', ANDROID_STORE_URL);

    return;
  }

  if (userAgent.isIOS) {
    appendIOSIframe('tuk-app://tuk');
  }
};

const generateAndroidIntentURL = (deepLinkPath: string, playStoreURL: string) => {
  return (
    `intent://${deepLinkPath}` +
    '#Intent;' +
    'scheme=tuk-app;' +
    'package=com.plottwist.tuk;' +
    `S.browser_fallback_url=${encodeURIComponent(playStoreURL)};` +
    'end'
  );
};

const appendIOSIframe = (targetDeepLink: string) => {
  let timer: number | null = null;

  const cleanup = () => {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }

    document.removeEventListener('visibilitychange', onHide, true);
    window.removeEventListener('pagehide', onHide, true);
    window.removeEventListener('blur', onHide, true);
    const iframe = document.getElementById('__dl_iframe__');
    if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
  };

  const onHide = () => cleanup();

  document.addEventListener('visibilitychange', onHide, true);
  window.addEventListener('pagehide', onHide, true);
  window.addEventListener('blur', onHide, true);

  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.id = '__dl_iframe__';
  iframe.src = targetDeepLink;
  document.body.appendChild(iframe);

  timer = window.setTimeout(() => {
    try {
      window.location.replace(IOS_STORE_URL_APPS);
    } catch {
      window.location.replace(IOS_STORE_URL_WEB);
    } finally {
      cleanup();
    }
  }, FALL_BACK_DELAY_MS);

  return;
};
