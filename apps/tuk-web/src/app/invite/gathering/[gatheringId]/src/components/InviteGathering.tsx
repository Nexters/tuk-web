'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteGatheringContent from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringContent';
import InviteGatheringErrorFallback from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringErrorFallback';
import InviteGatheringSkeleton from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringSkeleton';
import { TukLogo } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import SkeletonGuard from '@/app/invite/meet/[meetId]/src/components/SkeletonGuard';
import { Button } from '@/shared/components';
import { useParam } from '@/shared/hooks/useParam';

const InviteGathering = () => {
  const gatheringId = Number(useParam('gatheringId'));

  return (
    <div className="relative w-full overflow-y-auto overflow-x-hidden bg-gray-50 px-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[706px] -translate-x-1/2 -translate-y-1/2 rotate-[-21deg] bg-gradient-to-b from-[#FFA098] to-[#FDD27C] opacity-60 blur-[100px]" />

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset} FallbackComponent={InviteGatheringErrorFallback}>
            <SkeletonGuard minMs={250} skeleton={<InviteGatheringSkeleton />}>
              <Suspense fallback={<InviteGatheringSkeleton />}>
                <InviteGatheringContent />
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
          onClick={() =>
            (window.location.href = `tuk-app://tuk/join-gathering?gatheringId=${gatheringId}`)
          }
        >
          입장하기
        </Button>
      </div>
    </div>
  );
};

export default InviteGathering;
