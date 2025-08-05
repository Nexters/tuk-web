'use client';

import { useEffect, useState } from 'react';

import { InviteCard, QuoteIcon, TukLogo } from '@/app/invite/meet/src/components/InviteMeet';
import { Button } from '@/shared/components';
import AppInstallBanner from '@/shared/components/AppInstallBanner';
import { cn } from '@/shared/lib';

const BANNER_KEY = 'gathering-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const GatheringMeet = () => {
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
    <div className="relative w-full overflow-y-auto overflow-x-hidden bg-[#fafafa] px-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[706px] -translate-x-1/2 -translate-y-1/2 rotate-[-21deg] bg-gradient-to-b from-[#FFA098] to-[#FDD27C] opacity-60 blur-[100px]" />

      {showBanner && <AppInstallBanner onClose={handleCloseBanner} />}

      <h2
        className={cn(
          'serif-title-22-M font-bold text-black-500',
          showBanner ? 'mt-[6.875rem]' : 'mt-[1.875rem]'
        )}
      >
        모임에
        <br />
        참여하시겠어요?
      </h2>

      <div className="relative mt-12 flex justify-center">
        <div
          className={cn(
            'relative h-[23.125rem] w-[16.25rem] rounded-[0.625rem] bg-[#f0f1f3] px-4 py-3 transition-all duration-700 ease-out',
            animateCardIn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          )}
        >
          <div className="flex justify-end">
            <p className="serif-body-14-R text-gray-800">
              다음 만남은 계획대로
              <br />
              되지 않아 친구들에게
            </p>
          </div>

          <div className="mt-[4.375rem]">
            <QuoteIcon />
            <div className="mt-[0.8125rem] flex flex-col gap-[0.3125rem]">
              <p className="serif-body-16-M text-black-500">제주도 여행가서</p>
              <p className="serif-body-16-M text-black-500">새벽 4시까지</p>
              <p className="serif-body-16-M text-black-500">전생 이야기 나누기</p>
            </div>

            <p className="serif-body-16-M mt-5 text-black-500">어때</p>
          </div>

          <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4">
            <p className="serif-body-12-R text-[#cccccc]">연락이</p>
            <p className="serif-body-12-R text-[#cccccc]">뜸해진 우리</p>
          </div>
        </div>

        <div className="absolute left-1/2 top-12 -translate-x-1/2">
          <InviteCard />
        </div>
      </div>

      <div className="mt-[4.125rem] flex justify-center pb-[9.0625rem]">
        <TukLogo />
      </div>

      <div className="fixed bottom-0 left-0 z-30 w-full bg-gradient-to-b from-white-default/0 to-white-default px-5 py-6">
        <Button className="w-full">입장하기</Button>
      </div>
    </div>
  );
};

export default GatheringMeet;
