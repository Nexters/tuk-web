'use client';

import { useEffect, useState } from 'react';

import GradientBackground from '@/app/invite/meet/src/components/GradientBackground';
import { Button, CloseIcon } from '@/components';

const BANNER_KEY = 'invite-banner-dismissed-at';
const BANNER_RESHOW_MINUTES = 30;

const InviteMeet = () => {
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
      return;
    }

    const dismissedTime = parseInt(dismissedAt, 10);
    const thirtyMinutes = BANNER_RESHOW_MINUTES * 60 * 1000;

    if (now - dismissedTime > thirtyMinutes) {
      setShowBanner(true);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-white to-[#DCC8F8] px-5">
      <GradientBackground />

      {showBanner && (
        <div className="fixed left-0 top-0 z-20 flex h-20 w-full items-center justify-between bg-black p-5 text-white">
          <div className="flex items-center gap-2">
            <button onClick={handleCloseBanner}>
              <CloseIcon />
            </button>
            <div className="flex gap-2.5">
              <div className="size-10 rounded-[0.3125rem] bg-[#d9d9d9]" />
              <p className="text-body-14-R">
                앱을 다운받고 편하게 만남을
                <br />
                이어나가보세요
              </p>
            </div>
          </div>

          <div className="rounded-[1.25rem] bg-white px-2.5 py-2 text-body-12-B text-[#1f1f1f]">
            앱으로 열기
          </div>
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-28 pt-20" />

      <div className="fixed bottom-4 left-0 z-30 w-full px-4">
        <Button className="w-full">초대장 확인하기</Button>
      </div>
    </div>
  );
};

export default InviteMeet;
