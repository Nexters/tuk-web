import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { gatheringAPIService } from '@/app/invite/gathering/[gatheringId]/src/service';
import { CardFrame } from '@/app/proposal/[proposalId]/detail/components/GatheringProposalContent';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
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

  const [showBanner, setShowBanner] = useState(false);

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

  return (
    <>
      {showBanner && <AppInstallBanner onClose={handleCloseBanner} />}

      <h2
        className={cn(
          'serif-title-22-M font-bold text-gray-900',
          showBanner ? 'mt-[6.875rem]' : 'mt-[1.875rem]'
        )}
      >
        모임에
        <br />
        참여하시겠어요?
      </h2>

      <div className="relative mt-[70px] flex flex-col items-center justify-center">
        <div className="h-[320px] w-[278px] rounded-[10px] bg-gray-50" />
        <div
          className={cn(
            'absolute bottom-[-80px] left-1/2 h-[421px] w-[408px] -translate-x-1/2 translate-y-0'
          )}
        >
          <div className="relative size-full">
            <div className="absolute inset-0 z-0">
              <CardFrame />
            </div>

            {proposalDetail.data.gatheringName && (
              <div className="serif-body-16-M absolute left-1/2 top-[180px] z-[1] -translate-x-1/2 text-center text-gray-900">
                {proposalDetail.data.gatheringName}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteGatheringContent;
