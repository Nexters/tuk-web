import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteListErrorFallback from '@/app/gathering/[gatheringId]/invites/src/components/InviteListErrorFallback';
import InvitListSkeleton from '@/app/gathering/[gatheringId]/invites/src/components/InvitListSkeleton';
import SendInviteListContent from '@/app/gathering/[gatheringId]/invites/src/components/SendInviteListContent';

const SendInviteList = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={InviteListErrorFallback}>
          <Suspense fallback={<InvitListSkeleton />}>
            <SendInviteListContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SendInviteList;
