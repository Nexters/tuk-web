import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { gatheringAPIService } from '@/app/invite/gathering/[gatheringId]/src/service';
import { InviteCard } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
import { useParam } from '@/shared/hooks/useParam';
import { cn } from '@/shared/lib';

const BANNER_KEY = 'gathering-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const InviteGatheringContent = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const { data } = useSuspenseQuery({
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

      <div className="relative mt-12 flex justify-center">
        <div className="relative mt-6 h-[300px] w-[260px] rounded-[10px] border border-black-default/5 bg-[#f0f1f3]">
          <h3 className="serif-body-20-R mt-[50px] text-center">{data?.data.gatheringName}</h3>

          <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4">
            <p className="serif-body-12-R text-gray-500">연락이</p>
            <p className="serif-body-12-R text-gray-500">뜸해진 우리</p>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <InviteCard />
        </div>
      </div>
    </>
  );
};

export default InviteGatheringContent;
