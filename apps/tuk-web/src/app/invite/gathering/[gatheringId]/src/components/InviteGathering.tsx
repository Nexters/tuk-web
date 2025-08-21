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

const InviteGathering = () => {
  const gatheringId = Number(useParam('gatheringId'));

  return (
    <BackgroundTemplate>
      <BackgroundTemplate.Main className="overflow-y-auto px-5">
        <BackgroundTemplate.Gradient />

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
