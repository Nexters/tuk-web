import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useMemo } from 'react';

import { gatheringProposalAPIService } from '@/app/gathering/[gatheringId]/invites/src/service';
import { InviteCard } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useParam } from '@/shared/hooks/useParam';

const ReceiveInviteListContent = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['getGatheringProposals', gatheringId, 'RECEIVED'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      gatheringProposalAPIService.getGatheringProposals(gatheringId, 'RECEIVED', {
        pageNumber: pageParam,
        pageSize: 10,
      }),
    getNextPageParam: lastPage => {
      const { hasNext, pageNumber } = lastPage;
      return hasNext ? pageNumber + 1 : undefined;
    },
  });

  const proposals = useMemo(() => data.pages.flatMap(p => p.content), [data]);

  const { targetRef } = useIntersectionObserver({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => fetchNextPage(),
    rootMargin: '200px 0px',
  });

  return (
    <div className="mb-[6.25rem] mt-[1.875rem] flex flex-col justify-center gap-10">
      {proposals.length === 0 ? (
        <div className="flex h-[16.25rem] items-center justify-center">
          <span className="pretendard-body-14-R text-gray-800">받은 초대장이 아직 없어요</span>
        </div>
      ) : (
        <>
          {proposals.map(proposal => (
            <div className="flex flex-col items-center gap-12" key={proposal.proposalId}>
              <Link href={`/gathering/${gatheringId}/invites/${proposal.proposalId}`}>
                <div className="relative flex justify-center">
                  <InviteCardFrame proposal={proposal} />

                  <div className="absolute left-1/2 top-12 -translate-x-1/2">
                    <InviteCard />
                  </div>
                </div>
              </Link>

              <span className="pretendard-body-12-R text-gray-800">{proposal.relativeTime}</span>
            </div>
          ))}
        </>
      )}

      <div ref={targetRef} className="h-1" aria-hidden />
    </div>
  );
};

export default ReceiveInviteListContent;
