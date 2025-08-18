'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import GradientBackground from '@/app/invite/meet/[meetId]/src/components/GradientBackground';
import InviteProposalContent from '@/app/invite/meet/[meetId]/src/components/InviteProposalContent';
import InviteProposalErrorFallback from '@/app/invite/meet/[meetId]/src/components/InviteProposalErrorFallback';
import InviteProposalSkeleton from '@/app/invite/meet/[meetId]/src/components/InviteProposalSkeleton';
import SkeletonGuard from '@/app/invite/meet/[meetId]/src/components/SkeletonGuard';
import { Button } from '@/shared/components';
import { useParam } from '@/shared/hooks/useParam';

const InviteProposal = () => {
  const proposalId = Number(useParam('meetId'));

  return (
    <div className="relative w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-white-default to-[#DCC8F8] px-5">
      <GradientBackground />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={InviteProposalErrorFallback}>
            <SkeletonGuard minMs={250} skeleton={<InviteProposalSkeleton />}>
              <Suspense fallback={<InviteProposalSkeleton />}>
                <InviteProposalContent />
              </Suspense>
            </SkeletonGuard>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

      <div className="mt-[4.125rem] flex justify-center pb-[9.0625rem]">
        <TukLogo />
      </div>

      <div className="fixed bottom-0 left-1/2 z-30 w-full max-w-[600px] -translate-x-1/2 bg-gradient-to-b from-white-default/0 to-white-default px-5 py-6">
        <Button
          className="w-full"
          onClick={() => (window.location.href = `tuk-app://tuk/proposal-detail/${proposalId}`)}
        >
          초대장 확인하기
        </Button>
      </div>
    </div>
  );
};

export default InviteProposal;

export const InviteCard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="348"
    height="381"
    viewBox="0 0 348 381"
    fill="none"
  >
    <g filter="url(#filter0_d_1294_13169)">
      <mask id="path-1-inside-1_1294_13169" fill="white">
        <path d="M308 15C313.523 15 318 19.4772 318 25V325.999C318 331.522 313.523 336 308 336H40C34.4772 336 30 331.522 30 325.999V25C30 19.4772 34.4772 15 40 15H138.218C143.716 15 148.008 19.5824 149.987 24.7119C153.959 35.012 163.952 42.3193 175.652 42.3193C187.353 42.3193 197.346 35.012 201.318 24.7119C203.296 19.5824 207.589 15 213.086 15H308Z" />
      </mask>
      <path
        d="M308 15C313.523 15 318 19.4772 318 25V325.999C318 331.522 313.523 336 308 336H40C34.4772 336 30 331.522 30 325.999V25C30 19.4772 34.4772 15 40 15H138.218C143.716 15 148.008 19.5824 149.987 24.7119C153.959 35.012 163.952 42.3193 175.652 42.3193C187.353 42.3193 197.346 35.012 201.318 24.7119C203.296 19.5824 207.589 15 213.086 15H308Z"
        fill="#F5F5F5"
        fillOpacity="0.02"
        shapeRendering="crispEdges"
      />
      <path
        d="M308 336V337.5V336ZM40 15V13.5V15ZM201.318 24.7119L202.718 25.2516L201.318 24.7119ZM149.987 24.7119L148.587 25.2516L149.987 24.7119ZM308 15V16.5C312.694 16.5 316.5 20.3056 316.5 25H318H319.5C319.5 18.6487 314.351 13.5 308 13.5V15ZM318 25H316.5V325.999H318H319.5V25H318ZM318 325.999H316.5C316.5 330.694 312.694 334.5 308 334.5V336V337.5C314.351 337.5 319.5 332.35 319.5 325.999H318ZM308 336V334.5H40V336V337.5H308V336ZM40 336V334.5C35.3058 334.5 31.5 330.694 31.5 325.999H30H28.5C28.5 332.35 33.6485 337.5 40 337.5V336ZM30 325.999H31.5V25H30H28.5V325.999H30ZM30 25H31.5C31.5 20.3056 35.3056 16.5 40 16.5V15V13.5C33.6487 13.5 28.5 18.6487 28.5 25H30ZM40 15V16.5H138.218V15V13.5H40V15ZM149.987 24.7119L148.587 25.2516C152.775 36.111 163.311 43.8193 175.652 43.8193V42.3193V40.8193C164.592 40.8193 155.142 33.9129 151.386 24.1722L149.987 24.7119ZM175.652 42.3193V43.8193C187.994 43.8193 198.53 36.111 202.718 25.2516L201.318 24.7119L199.919 24.1722C196.162 33.9129 186.712 40.8193 175.652 40.8193V42.3193ZM213.086 15V16.5H308V15V13.5H213.086V15ZM201.318 24.7119L202.718 25.2516C204.592 20.3904 208.485 16.5 213.086 16.5V15V13.5C206.692 13.5 202 18.7744 199.919 24.1722L201.318 24.7119ZM138.218 15V16.5C142.819 16.5 146.712 20.3904 148.587 25.2516L149.987 24.7119L151.386 24.1722C149.304 18.7744 144.613 13.5 138.218 13.5V15Z"
        fill="url(#paint0_linear_1294_13169)"
        mask="url(#path-1-inside-1_1294_13169)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1294_13169"
        x="0"
        y="0"
        width="348"
        height="381"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="15" />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1294_13169" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1294_13169"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1294_13169"
        x1="30"
        y1="14.999"
        x2="318.001"
        y2="383.639"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.4" />
        <stop offset="1" stopColor="#999999" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

export const TukLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="154" height="76" viewBox="0 0 154 76" fill="none">
    <foreignObject x="-4" y="-4" width="162" height="84">
      <div
        style={{
          backdropFilter: 'blur(2px)',
          clipPath: 'url(#bgblur_0_1031_14686_clip_path)',
          height: '100%',
          width: '100%',
        }}
      />
    </foreignObject>
    <g opacity="0.2" data-figma-bg-blur-radius="4">
      <path
        d="M100.67 52.9516L145.066 0H145.337L100.94 52.9516H100.67ZM84.3367 74.5098V74.3111H108.701V74.5098H84.3367ZM114.747 74.5098V74.3111H142.72V74.5098H114.747ZM92.0069 74.5098L107.347 0H115.92L100.579 74.5098H92.0069ZM125.395 74.5098L114.296 36.7582L120.793 29.2078L134.779 74.5098H125.395ZM99.2259 0.198696V0H123.59V0.198696H99.2259ZM132.343 0.198696V0H154V0.198696H132.343Z"
        fill="#1F1F1F"
      />
      <path
        d="M69.7309 76C64.828 76 60.7523 75.1059 57.5038 73.3176C54.2853 71.5294 52.0745 68.8305 50.8713 65.2209C49.6682 61.6113 49.6381 57.0911 50.7811 51.6601L61.6096 0H70.1821L59.3536 50.6667C58.6919 53.7795 58.3159 56.8261 58.2257 59.8065C58.1655 62.7538 58.4964 65.4362 59.2183 67.8536C59.9703 70.2379 61.2336 72.142 63.0083 73.566C64.7829 74.99 67.1742 75.702 70.1821 75.702C74.8143 75.702 78.6193 74.7582 81.5972 72.8706C84.6051 70.9499 87.0114 68.2013 88.8162 64.6248C90.6209 61.0484 92.0497 56.7268 93.1024 51.6601L103.931 0H104.111L93.2829 51.6601C92.2001 56.8593 90.7262 61.2802 88.8613 64.9229C87.0265 68.5325 84.56 71.281 81.4618 73.1686C78.3937 75.0562 74.4835 76 69.7309 76ZM53.037 0.198696V0H78.7547V0.198696H53.037ZM94.5462 0.198696V0H112.143V0.198696H94.5462Z"
        fill="#1F1F1F"
      />
      <path
        d="M11.5504 74.5098L27.2517 0H35.8242L20.1229 74.5098H11.5504ZM1.62427 74.5098V74.3111H30.0491V74.5098H1.62427ZM0 22.3529L4.69234 0H58.3836L53.6912 22.3529H53.5108C54.3831 18.1473 54.7591 14.3721 54.6387 11.0274C54.5184 7.68279 53.6612 5.05011 52.067 3.12942C50.4728 1.1756 47.9161 0.198696 44.3968 0.198696H17.7768C15.1298 0.198696 12.8438 0.76166 10.9187 1.88759C8.99366 3.01351 7.35435 4.58649 6.00079 6.60654C4.64723 8.59347 3.50422 10.9281 2.57177 13.6105C1.63931 16.2928 0.842216 19.207 0.180475 22.3529H0Z"
        fill="#1F1F1F"
      />
    </g>
    <defs>
      <clipPath id="bgblur_0_1031_14686_clip_path" transform="translate(4 4)">
        <path d="M100.67 52.9516L145.066 0H145.337L100.94 52.9516H100.67ZM84.3367 74.5098V74.3111H108.701V74.5098H84.3367ZM114.747 74.5098V74.3111H142.72V74.5098H114.747ZM92.0069 74.5098L107.347 0H115.92L100.579 74.5098H92.0069ZM125.395 74.5098L114.296 36.7582L120.793 29.2078L134.779 74.5098H125.395ZM99.2259 0.198696V0H123.59V0.198696H99.2259ZM132.343 0.198696V0H154V0.198696H132.343Z" />
        <path d="M69.7309 76C64.828 76 60.7523 75.1059 57.5038 73.3176C54.2853 71.5294 52.0745 68.8305 50.8713 65.2209C49.6682 61.6113 49.6381 57.0911 50.7811 51.6601L61.6096 0H70.1821L59.3536 50.6667C58.6919 53.7795 58.3159 56.8261 58.2257 59.8065C58.1655 62.7538 58.4964 65.4362 59.2183 67.8536C59.9703 70.2379 61.2336 72.142 63.0083 73.566C64.7829 74.99 67.1742 75.702 70.1821 75.702C74.8143 75.702 78.6193 74.7582 81.5972 72.8706C84.6051 70.9499 87.0114 68.2013 88.8162 64.6248C90.6209 61.0484 92.0497 56.7268 93.1024 51.6601L103.931 0H104.111L93.2829 51.6601C92.2001 56.8593 90.7262 61.2802 88.8613 64.9229C87.0265 68.5325 84.56 71.281 81.4618 73.1686C78.3937 75.0562 74.4835 76 69.7309 76ZM53.037 0.198696V0H78.7547V0.198696H53.037ZM94.5462 0.198696V0H112.143V0.198696H94.5462Z" />
        <path d="M11.5504 74.5098L27.2517 0H35.8242L20.1229 74.5098H11.5504ZM1.62427 74.5098V74.3111H30.0491V74.5098H1.62427ZM0 22.3529L4.69234 0H58.3836L53.6912 22.3529H53.5108C54.3831 18.1473 54.7591 14.3721 54.6387 11.0274C54.5184 7.68279 53.6612 5.05011 52.067 3.12942C50.4728 1.1756 47.9161 0.198696 44.3968 0.198696H17.7768C15.1298 0.198696 12.8438 0.76166 10.9187 1.88759C8.99366 3.01351 7.35435 4.58649 6.00079 6.60654C4.64723 8.59347 3.50422 10.9281 2.57177 13.6105C1.63931 16.2928 0.842216 19.207 0.180475 22.3529H0Z" />
      </clipPath>
    </defs>
  </svg>
);

export const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
    <path
      d="M5.53683 0C11.9395 0 10.1665 10.2041 0.0206388 15C2.08921 13.7755 4.55179 11.1224 4.6503 9.18367C4.35479 9.28571 3.96077 9.28571 3.66526 9.28571C1.20268 9.28571 -0.471878 7.2449 0.119142 4.69388C0.611659 2.04082 3.07424 0 5.53683 0Z"
      fill="#FE4030"
    />
    <path
      d="M14.1071 0C20.5099 0 18.7368 10.2041 8.59095 15C10.6595 13.7755 13.1221 11.1224 13.2206 9.18367C12.9251 9.28571 12.5311 9.28571 12.2356 9.28571C9.77299 9.28571 8.09843 7.2449 8.68945 4.69388C9.18197 2.04082 11.6446 0 14.1071 0Z"
      fill="#FE4030"
    />
  </svg>
);
