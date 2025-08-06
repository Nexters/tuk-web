'use client';

import Image from 'next/image';
import Link from 'next/link';

import Header from '@/app/(home)/src/components/Header';
import { ResponsiveHeightResize } from '@/app/(home)/src/components/ResponsiveHeightResize';

export default function LandingPage() {
  return (
    <>
      <ResponsiveHeightResize />

      <Header />

      <section
        id="thumbnail"
        className="fixed left-0 top-0 z-[-1] h-[calc(calc(var(--vh,1vh)*100)+26px)] w-full bg-cover bg-center bg-no-repeat opacity-90 transition-[background-image] duration-100"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), url(/main-bg.jpg)',
        }}
      >
        <div className="relative m-auto h-full max-w-screen-xl overflow-hidden px-[70px] max-[1280px]:max-w-[55rem] max-[1280px]:px-6 max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center max-[880px]:justify-end max-[880px]:pb-[1.625rem]">
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
                className="flex h-[3.625rem] w-[10.75rem] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-solid border-white-default/20 bg-black-default/30 text-sm font-bold text-white-default"
              >
                <Image src="/app-store.png" alt="appStoreImg" width={24} height={24} />
                App Store
              </Link>
              <Link
                href="/"
                className="flex h-[3.625rem] w-[10.75rem] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-solid border-white-default/20 bg-black-default/30 text-sm font-bold text-white-default"
              >
                <Image src="/play-store.png" alt="playStoreImg" width={24} height={24} />
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

      <div className="mt-[calc(var(--vh,1vh)*100)] rounded-t-[3.75rem] bg-white-default pt-[3.75rem] max-[880px]:rounded-t-[1.625rem] max-[880px]:pt-[1.625rem]">
        <section className="relative mb-40 mt-[8.75rem] max-[1280px]:mt-[6.25rem] max-[880px]:mt-10">
          <div className="m-auto max-w-screen-xl overflow-hidden p-0 px-[4.375rem] max-[1280px]:max-w-[880px] max-[1280px]:px-6 min-[1281px]:p-[2.875rem]">
            <div className="px-6">
              <h2 className="mb-8 mt-5 text-[48px] font-bold text-[#1f1f1f] max-[880px]:mb-6 max-[880px]:mt-4 max-[880px]:text-center max-[880px]:text-[32px]">
                누군가 나를 떠올리며
                <br />
                툭, 건넸어요
              </h2>
            </div>

            <div className="mt-[7.5rem] max-[1280px]:mt-20 max-[880px]:mt-[6.25rem]">
              <div className="grid [column-gap:33px] [grid-template-columns:minmax(554px,_auto)_554px] [grid-template-rows:409px_211px] max-[1280px]:[column-gap:20px] max-[1280px]:[grid-template-columns:minmax(374px,_auto)_464px] max-[1280px]:[grid-template-rows:356px_164px] max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center max-[880px]:text-center">
                <div className="mt-20 max-[1280px]:mt-10">
                  <div className="px-6">
                    <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:text-[22px] max-[880px]:mx-auto max-[880px]:mb-4 max-[880px]:mt-0 max-[880px]:max-w-[520px] max-[880px]:text-center">
                      슬슬 그리워질 타이밍 아닐까요
                    </h4>
                    <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg max-[880px]:mx-auto max-[880px]:max-w-[520px] max-[880px]:text-center">
                      보고는 싶지만 먼저 연락하기 어려울 때, 넌지시 모임 만남에 대한 제안을
                      해보세요.
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]">
                  <Image
                    src="/service-capture-1.png"
                    alt="serviceCapture1"
                    fill
                    sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="block max-[880px]:hidden">
          <section className="grid select-none grid-cols-2">
            <div className="sticky top-0 flex h-[calc(var(--vh,1vh)*100)] justify-end bg-[linear-gradient(135deg,_#FF976A_0%,_#FF3838_100%)] pt-[320px] max-[1280px]:pt-[200px]">
              <div className="w-[640px] pl-[70px] max-[1280px]:w-[440px] max-[1280px]:pl-6">
                <div className="w-[456px] max-[1280px]:w-[308px]">
                  <h2 className="mt-5 text-[48px] font-bold text-white-default max-[1280px]:mb-8 max-[1280px]:mt-4 max-[1280px]:text-[40px]">
                    툭, 건네는 만남
                    <br />
                    TUK
                  </h2>

                  <Link
                    href="/"
                    className="mt-5 flex h-[56px] w-[236px] cursor-pointer items-center justify-center rounded-[36px] bg-white-default text-center font-bold text-[#FF976A] max-[1280px]:h-12 max-[1280px]:w-[200px] max-[1280px]:text-base"
                  >
                    툭 제안 보내기
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white-default pt-[300px] max-[1280px]:pt-[200px]">
              <div className="mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]">
                <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
                  만남의 타이밍
                </h4>
                <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
                  설정한 주기에 따라, 자연스럽게 만남을 제안하는 알림이 도착해요
                </span>
              </div>
              <div className="relative aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]">
                <Image
                  src="/mockup-1.png"
                  alt="mockup1"
                  fill
                  sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                  className="object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
