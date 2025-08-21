'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteGatheringContent from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringContent';
import InviteGatheringErrorFallback from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringErrorFallback';
import InviteGatheringSkeleton from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringSkeleton';
import SkeletonGuard from '@/app/invite/meet/[meetId]/src/components/SkeletonGuard';
import { BackgroundTemplate, Button } from '@/shared/components';
import { useParam } from '@/shared/hooks/useParam';
import { cn } from '@/shared/lib';

const InviteGathering = () => {
  const gatheringId = Number(useParam('gatheringId'));

  return (
    <BackgroundTemplate>
      <BackgroundTemplate.Main className="px-5">
        <BackgroundTemplate.Gradient className="pointer-events-none" />

        <div
          className={cn(
            'relative z-10 mx-auto w-full max-w-[600px]',
            'min-h-[100svh]',
            'overflow-y-auto [-webkit-overflow-scrolling:touch]',
            'pb-[calc(120px+env(safe-area-inset-bottom,0px))]'
          )}
        >
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary onReset={reset} FallbackComponent={InviteGatheringErrorFallback}>
                <SkeletonGuard minMs={250} skeleton={<InviteGatheringSkeleton />}>
                  <Suspense fallback={null}>
                    <InviteGatheringContent />
                  </Suspense>
                </SkeletonGuard>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </div>
        <BackgroundTemplate.CTA>
          <Button
            className="w-full"
            onClick={() =>
              (window.location.href = `tuk-app://tuk/join-gathering?gatheringId=${gatheringId}`)
            }
          >
            입장하기
          </Button>
        </BackgroundTemplate.CTA>
      </BackgroundTemplate.Main>
    </BackgroundTemplate>
  );
};

export default InviteGathering;
