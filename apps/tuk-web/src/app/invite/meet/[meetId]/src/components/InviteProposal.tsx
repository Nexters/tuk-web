'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InviteProposalContent from '@/app/invite/meet/[meetId]/src/components/InviteProposalContent';
import InviteProposalErrorFallback from '@/app/invite/meet/[meetId]/src/components/InviteProposalErrorFallback';

const InviteProposal = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={InviteProposalErrorFallback}>
          <Suspense fallback={<div>loading</div>}>
            <InviteProposalContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default InviteProposal;
