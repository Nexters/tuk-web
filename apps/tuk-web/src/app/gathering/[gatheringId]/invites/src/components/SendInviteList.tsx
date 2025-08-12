import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { gatheringAPIService } from '@/app/gathering/[gatheringId]/invites/src/service';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { useParam } from '@/shared/hooks/useParam';

const SendInviteList = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getGatheringProposals', gatheringId, 'SENT'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      gatheringAPIService.getGatheringProposals(gatheringId, 'SENT', {
        pageNumber: pageParam,
        pageSize: 10,
      }),
    getNextPageParam: lastPage => {
      const { hasNext, pageNumber } = lastPage.data;
      return hasNext ? pageNumber + 1 : undefined;
    },
  });

  const proposals = useMemo(() => data?.pages.flatMap(p => p.data.content) ?? [], [data]);

  const { targetRef } = useIntersectionObserver({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => fetchNextPage(),
    rootMargin: '200px 0px',
  });

  return (
    <div className="mb-[6.25rem] mt-[1.875rem] flex flex-col justify-center gap-10">
      {proposals.length === 0 ? (
        <div className="flex h-[16.25rem] items-center justify-center">
          <span className="pretendard-body-14-R text-gray-800">보낸 초대장이 아직 없어요</span>
        </div>
      ) : (
        proposals.map(proposal => (
          <div className="flex flex-col items-center gap-2.5" key={proposal.proposalId}>
            <InviteCardFrame />
            <span className="pretendard-body-12-R text-gray-800">{proposal.relativeTime}</span>
          </div>
        ))
      )}

      <div ref={targetRef} className="h-1" />
    </div>
  );
};

export default SendInviteList;
