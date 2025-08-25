'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteGatheringContent from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringContent';
import InviteGatheringErrorFallback from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringErrorFallback';
import InviteGatheringSkeleton from '@/app/invite/gathering/[gatheringId]/src/components/InviteGatheringSkeleton';
import { BackgroundTemplate, Button } from '@/shared/components';
import { useUserAgent } from '@/shared/components/provider/UserAgentProvider';
import SkeletonGuard from '@/shared/components/SkeletonGuard';
import { useParam } from '@/shared/hooks/useParam';
import { joinGatheringInAPP } from '@/shared/lib/deeplink';

const InviteGathering = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const userAgent = useUserAgent();

  return (
    <BackgroundTemplate>
      <BackgroundTemplate.Main className="px-5">
        <BackgroundTemplate.Gradient className="pointer-events-none" />

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
          <Button className="w-full" onClick={() => joinGatheringInAPP(gatheringId, userAgent)}>
            입장하기
          </Button>
        </BackgroundTemplate.CTA>
      </BackgroundTemplate.Main>
    </BackgroundTemplate>
  );
};

export default InviteGathering;
