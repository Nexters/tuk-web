'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteProposalContent from '@/app/invite/meet/[meetId]/src/components/InviteProposalContent';
import InviteProposalErrorFallback from '@/app/invite/meet/[meetId]/src/components/InviteProposalErrorFallback';
import InviteProposalSkeleton from '@/app/invite/meet/[meetId]/src/components/InviteProposalSkeleton';
import SkeletonGuard from '@/app/invite/meet/[meetId]/src/components/SkeletonGuard';
import { BackgroundTemplate, Button } from '@/shared/components';
import { useParam } from '@/shared/hooks/useParam';

const InviteProposal = () => {
  const proposalId = Number(useParam('meetId'));

  return (
    <BackgroundTemplate>
      <BackgroundTemplate.Main className="overflow-y-auto px-5">
        <BackgroundTemplate.Gradient />

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

        <BackgroundTemplate.CTA>
          <Button
            className="w-full"
            onClick={() => (window.location.href = `tuk-app://tuk/proposal-detail/${proposalId}`)}
          >
            초대장 확인하기
          </Button>
        </BackgroundTemplate.CTA>
      </BackgroundTemplate.Main>
    </BackgroundTemplate>
  );
};

export default InviteProposal;

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
