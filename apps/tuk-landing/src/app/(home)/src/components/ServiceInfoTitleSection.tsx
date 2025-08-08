import Image from 'next/image';

import { useSequentialFadeIn } from '@/app/(home)/src/components/useSequentialFadeIn';
import { cn } from '@/shared/lib';

const ServiceInfoTitleSection = () => {
  const { ref, activeIndex } = useSequentialFadeIn(3, 300);

  return (
    <section
      className="relative mb-40 mt-[8.75rem] max-[1280px]:mt-[6.25rem] max-[880px]:mt-10"
      ref={ref}
    >
      <div className="m-auto max-w-screen-xl overflow-hidden p-0 px-[4.375rem] max-[1280px]:max-w-[880px] max-[1280px]:px-6 min-[1281px]:p-[2.875rem]">
        <div className="px-6">
          <h2
            className={cn(
              'opacity-0',
              activeIndex >= 0 && 'animate-fade-up',
              'mb-8 mt-5 text-[48px] font-bold text-[#1f1f1f] max-[880px]:mb-6 max-[880px]:mt-4 max-[880px]:text-center max-[880px]:text-[32px]'
            )}
          >
            누군가 나를 떠올리며
            <br />
            툭, 건넸어요
          </h2>
        </div>

        <div className="mt-[7.5rem] max-[1280px]:mt-20 max-[880px]:mt-[6.25rem]">
          <div className="grid [column-gap:33px] [grid-template-columns:minmax(554px,_auto)_554px] [grid-template-rows:409px_211px] max-[1280px]:[column-gap:20px] max-[1280px]:[grid-template-columns:minmax(374px,_auto)_464px] max-[1280px]:[grid-template-rows:356px_164px] max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center max-[880px]:text-center">
            <div
              className={cn(
                'opacity-0',
                activeIndex >= 1 && 'animate-fade-up',
                'mt-20 max-[1280px]:mt-10'
              )}
            >
              <div className="px-6">
                <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:text-[22px] max-[880px]:mx-auto max-[880px]:mb-4 max-[880px]:mt-0 max-[880px]:max-w-[520px] max-[880px]:text-center">
                  슬슬 그리워질 타이밍 아닐까요
                </h4>
                <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg max-[880px]:mx-auto max-[880px]:max-w-[520px] max-[880px]:text-center">
                  보고는 싶지만 먼저 연락하기 어려울 때, 넌지시 모임 만남에 대한 제안을 해보세요.
                </span>
              </div>
            </div>

            <div
              className={cn(
                'opacity-0',
                activeIndex >= 2 && 'animate-fade-up',
                'relative aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]'
              )}
            >
              <Image
                src="/service-capture-1.webp"
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
  );
};

export default ServiceInfoTitleSection;
