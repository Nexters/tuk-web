import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteListErrorFallback from '@/app/gathering/[gatheringId]/invites/src/components/InviteListErrorFallback';
import InvitListSkeleton from '@/app/gathering/[gatheringId]/invites/src/components/InvitListSkeleton';
import ReceiveInviteListContent from '@/app/gathering/[gatheringId]/invites/src/components/ReceiveInviteListContent';

const ReceiveInviteList = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={InviteListErrorFallback}>
          <Suspense fallback={<InvitListSkeleton />}>
            <ReceiveInviteListContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ReceiveInviteList;
