'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { gatheringAPIService } from '@/app/invite/gathering/[gatheringId]/src/service';
import { QuoteIcon } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import { CardFrame } from '@/app/proposal/[proposalId]/detail/components/GatheringProposalContent';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
import { useSplashGate } from '@/shared/components/SplashGate';
import { useParam } from '@/shared/hooks/useParam';
import { cn } from '@/shared/lib';

const BANNER_KEY = 'gathering-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const InviteGatheringContent = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const { data: proposalDetail } = useSuspenseQuery({
    queryKey: ['getGatheringName', gatheringId],
    queryFn: () => gatheringAPIService.getGatheringName(gatheringId),
  });

  const { done: splashDone } = useSplashGate();

  const [showBanner, setShowBanner] = useState(true);
  const [animate, setAnimate] = useState(false);

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
    if (!splashDone) return;
    let raf = 0;
    const t = setTimeout(() => {
      raf = requestAnimationFrame(() => setAnimate(true));
    }, 150);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [splashDone]);

  return (
    <>
      {showBanner && <AppInstallBanner onClose={handleCloseBanner} />}

      <h2
        className={cn(
          'serif-title-22-M font-bold text-gray-900',
          showBanner ? 'mt-[calc(70px+env(safe-area-inset-top,0px))]' : 'mt-[1.875rem]'
        )}
      >
        모임에
        <br />
        참여하시겠어요?
      </h2>

      <div className="relative mt-[56px] flex flex-col items-center justify-center">
        <div
          className={cn(
            'h-[290px] w-[278px] translate-y-[10px] rounded-[10px] bg-gray-50 pt-4',
            animate && 'invite-float'
          )}
        >
          <div className="flex flex-col items-center">
            <QuoteIcon />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[-90px] left-1/2 h-[421px] w-[408px] -translate-x-1/2">
          <div className="relative size-full">
            <div className="absolute inset-0 z-0">
              <CardFrame />
            </div>

            {proposalDetail.data.gatheringName && (
              <div className="absolute left-1/2 top-[180px] z-[1] flex -translate-x-1/2 flex-col gap-2.5">
                <div className="serif-body-14-R text-gray-500">연락이 뜸해진</div>

                <div className="serif-body-16-M text-center text-gray-900">
                  {proposalDetail.data.gatheringName}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteGatheringContent;
