import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import ClientOnly from '@/app/gathering/[gatheringId]/invites/src/components/ClientOnly';
import InviteListErrorFallback from '@/app/gathering/[gatheringId]/invites/src/components/InviteListErrorFallback';
import InvitListSkeleton from '@/app/gathering/[gatheringId]/invites/src/components/InvitListSkeleton';
import SendInviteListContent from '@/app/gathering/[gatheringId]/invites/src/components/SendInviteListContent';

const SendInviteList = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={InviteListErrorFallback}>
          <ClientOnly>
            <Suspense fallback={<InvitListSkeleton />}>
              <SendInviteListContent />
            </Suspense>
          </ClientOnly>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SendInviteList;
