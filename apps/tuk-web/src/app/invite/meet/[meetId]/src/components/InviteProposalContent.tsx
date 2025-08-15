import { useSuspenseQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import { InviteCard } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import { proposalAPIService } from '@/app/invite/meet/[meetId]/src/service';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useParam } from '@/shared/hooks/useParam';

const InviteProposalContent = () => {
  const proposalId = Number(useParam('meetId'));

  const [animateCardIn, setAnimateCardIn] = useState(false);

  const { data: proposalDetail } = useSuspenseQuery({
    queryKey: ['getProposalDetail', proposalId],
    queryFn: () => proposalAPIService.getProposalDetail(proposalId),
  });

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateCardIn(true), 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mt-12 flex justify-center">
      <InviteCardFrame proposal={proposalDetail.data} animateCardIn={animateCardIn} />

      <div className="absolute left-1/2 top-12 -translate-x-1/2">
        <InviteCard />
      </div>
    </div>
  );
};

export default InviteProposalContent;
