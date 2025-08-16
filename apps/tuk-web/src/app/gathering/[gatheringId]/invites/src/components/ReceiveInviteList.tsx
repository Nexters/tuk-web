import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ClientOnly from '@/app/gathering/[gatheringId]/invites/src/components/ClientOnly';
import InviteListErrorFallback from '@/app/gathering/[gatheringId]/invites/src/components/InviteListErrorFallback';
import InvitListSkeleton from '@/app/gathering/[gatheringId]/invites/src/components/InvitListSkeleton';
import ReceiveInviteListContent from '@/app/gathering/[gatheringId]/invites/src/components/ReceiveInviteListContent';

const ReceiveInviteList = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={InviteListErrorFallback}>
          <ClientOnly>
            <Suspense fallback={<InvitListSkeleton />}>
              <ReceiveInviteListContent />
            </Suspense>
          </ClientOnly>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ReceiveInviteList;
