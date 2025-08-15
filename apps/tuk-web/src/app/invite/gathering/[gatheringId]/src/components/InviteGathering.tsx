'use client';

import { useEffect, useState } from 'react';

import { InviteCard, TukLogo } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import { Button } from '@/shared/components';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useParam } from '@/shared/hooks/useParam';
import { cn } from '@/shared/lib';

const BANNER_KEY = 'gathering-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const InviteGathering = () => {
  const gatheringId = Number(useParam('gatheringId'));

  const [showBanner, setShowBanner] = useState(false);
  const [animateCardIn, setAnimateCardIn] = useState(false);

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
    <div className="relative w-full overflow-y-auto overflow-x-hidden bg-gray-50 px-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[706px] -translate-x-1/2 -translate-y-1/2 rotate-[-21deg] bg-gradient-to-b from-[#FFA098] to-[#FDD27C] opacity-60 blur-[100px]" />

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
        <InviteCardFrame animateCardIn={animateCardIn} />

        <div className="absolute left-1/2 top-12 -translate-x-1/2">
          <InviteCard />
        </div>
      </div>

      <div className="mt-[4.125rem] flex justify-center pb-[9.0625rem]">
        <TukLogo />
      </div>

      <div className="fixed bottom-0 left-0 z-30 w-full bg-gradient-to-b from-white-default/0 to-white-default px-5 py-6">
        <Button
          className="w-full"
          onClick={() =>
            (window.location.href = `tuk-app://tuk/join-gathering?gatheringId=${gatheringId}`)
          }
        >
          입장하기
        </Button>
      </div>
    </div>
  );
};

export default InviteGathering;
