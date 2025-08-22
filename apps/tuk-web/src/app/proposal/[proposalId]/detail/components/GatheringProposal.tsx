'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import GatheringProposalContent from '@/app/proposal/[proposalId]/detail/components/GatheringProposalContent';
import GatheringProposalErrorFallback from '@/app/proposal/[proposalId]/detail/components/GatheringProposalErrorFallback';
import GatheringProposalSkeleton from '@/app/proposal/[proposalId]/detail/components/GatheringProposalSkeleton';
import SkeletonGuard from '@/shared/components/SkeletonGuard';

const GatheringProposal = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={GatheringProposalErrorFallback}>
          <SkeletonGuard minMs={250} skeleton={<GatheringProposalSkeleton />}>
            <Suspense fallback={<GatheringProposalSkeleton />}>
              <GatheringProposalContent />
            </Suspense>
          </SkeletonGuard>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default GatheringProposal;
