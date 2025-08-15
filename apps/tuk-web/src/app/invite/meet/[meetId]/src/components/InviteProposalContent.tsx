import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { InviteCard } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import { proposalAPIService } from '@/app/invite/meet/[meetId]/src/service';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useParam } from '@/shared/hooks/useParam';
import { cn } from '@/shared/lib';

const BANNER_KEY = 'invite-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const InviteProposalContent = () => {
  const proposalId = Number(useParam('meetId'));

  const [animateCardIn, setAnimateCardIn] = useState(false);

  const [showBanner, setShowBanner] = useState(false);

  const { data: proposalDetail } = useSuspenseQuery({
    queryKey: ['getProposalDetail', proposalId],
    queryFn: () => proposalAPIService.getProposalDetail(proposalId),
  });

  const handleCloseBanner = () => {
    localStorage.setItem(BANNER_KEY, Date.now().toString());
    setShowBanner(false);
  };

  useEffect(() => {
    const dismissedAt = localStorage.getItem(BANNER_KEY);
    const now = Date.now();

    if (!dismissedAt) {
      setShowBanner(true);
    } else {
      const dismissedTime = parseInt(dismissedAt, 10);
      const thirtyMinutes = BANNER_RESHOW_MINUTES * 60 * 1000;
      if (now - dismissedTime > thirtyMinutes) {
        setShowBanner(true);
      }
    }
    const timeout = setTimeout(() => setAnimateCardIn(true), 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showBanner && <AppInstallBanner onClose={handleCloseBanner} />}

      <h2
        className={cn(
          'serif-title-22-M font-bold text-gray-900',
          showBanner ? 'mt-[6.875rem]' : 'mt-[1.875rem]'
        )}
      >
        보고 싶은 마음이
        <br />
        도착했어요
      </h2>

      <div className="relative mt-12 flex justify-center">
        <InviteCardFrame proposal={proposalDetail.data} animateCardIn={animateCardIn} />

        <div className="absolute left-1/2 top-12 -translate-x-1/2">
          <InviteCard />
        </div>
      </div>
    </>
  );
};

export default InviteProposalContent;
