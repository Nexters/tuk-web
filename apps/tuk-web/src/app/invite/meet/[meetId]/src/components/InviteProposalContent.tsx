import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { proposalAPIService } from '@/app/invite/meet/[meetId]/src/service';
import {
  Card,
  CardFrame,
} from '@/app/proposal/[proposalId]/detail/components/GatheringProposalContent';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
import { useParam } from '@/shared/hooks/useParam';
import { cn } from '@/shared/lib';

const BANNER_KEY = 'invite-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const InviteProposalContent = () => {
  const proposalId = Number(useParam('meetId'));

  const [slideDown, setSlideDown] = useState(false);

  const [showBanner, setShowBanner] = useState(false);

  const {
    data: proposalDetail,
    isLoading,
    isError,
  } = useSuspenseQuery({
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
  }, []);

  useEffect(() => {
    if (!isLoading && !isError) {
      const id = requestAnimationFrame(() => setSlideDown(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isLoading, isError]);

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

      <div className="relative mt-[70px] flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <Card proposalData={proposalDetail.data} />
        </div>

        <div
          className={cn(
            'ease-outmotion-reduce:transition-none absolute bottom-[-100px] left-1/2 h-[421px] w-[408px] -translate-x-1/2 transition-transform duration-1000',
            slideDown ? 'translate-y-52' : 'translate-y-0'
          )}
          style={{ willChange: 'transform', transitionDelay: '150ms' }}
        >
          <div className="relative size-full">
            <div className="absolute inset-0 z-0">
              <CardFrame />
            </div>

            {proposalDetail.data.gatheringName && (
              <div className="serif-body-16-M absolute bottom-[100px] left-1/2 z-[1] -translate-x-1/2 text-center text-gray-900">
                {proposalDetail.data.gatheringName}
                <br />
                친구들에게
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteProposalContent;
