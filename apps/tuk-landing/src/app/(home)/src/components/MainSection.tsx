'use client';

import Image from 'next/image';
import Link from 'next/link';

const MainSection = () => {
  return (
    <section
      id="thumbnail"
      className="fixed left-0 top-0 z-[-1] h-[calc(var(--vh,1vh)*100)] w-full"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/main-bg.webp"
          alt="Main Background"
          fill
          priority
          quality={100}
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative z-10 m-auto h-full max-w-screen-xl overflow-hidden px-[70px] max-[1280px]:max-w-[55rem] max-[1280px]:px-6 max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center max-[880px]:justify-end max-[880px]:pb-[1.625rem]">
        <div className="center-vertical absolute max-[880px]:relative max-[880px]:top-auto max-[880px]:mb-6 max-[880px]:translate-y-0 max-[880px]:text-center">
          <div className="mb-6 text-[22px] font-medium text-white-default max-[880px]:mb-3 max-[880px]:text-lg">
            단톡방은 살아있지만, 모임은 사라진 사이에게
          </div>
          <h1 className="text-[60px] font-bold leading-[1.3] text-white-default max-[1280px]:text-[52px] max-[880px]:text-[40px]">
            우리의 만남을 위해
            <br /> TUK
          </h1>
        </div>

        <div className="absolute bottom-[130px] max-[880px]:relative max-[880px]:bottom-auto">
          <div className="flex gap-3 max-[880px]:hidden">
            <Link
              href="/"
              className="flex h-[3.625rem] w-[10.75rem] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-white-default/20 bg-black-default/30 text-sm font-bold text-white-default"
            >
              <Image src="/app-store.webp" alt="App Store" width={24} height={24} priority />
              App Store
            </Link>
            <Link
              href="/"
              className="flex h-[3.625rem] w-[10.75rem] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-white-default/20 bg-black-default/30 text-sm font-bold text-white-default"
            >
              <Image src="/play-store.webp" alt="Google Play" width={24} height={24} priority />
              Google Play
            </Link>
          </div>

          <div className="mb-[85px] min-[881px]:hidden">
            <Link
              href="/"
              className="flex h-[52px] w-[153px] cursor-pointer items-center justify-center rounded-[36px] bg-white-default text-center font-bold text-[rgba(58,58,58,0.9)]"
            >
              앱 다운로드
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
