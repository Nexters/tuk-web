import Image from 'next/image';
import Link from 'next/link';

import { useSequentialFadeIn } from '@/app/(home)/src/components/useSequentialFadeIn';
import { cn } from '@/shared/lib';

const ServiceInfoContentResponsiveSecondSection = () => {
  const { ref, activeIndex } = useSequentialFadeIn(5, 300);

  return (
    <div className="hidden max-[880px]:block" ref={ref}>
      <section>
        <div className="flex flex-col items-center bg-[linear-gradient(135deg,_#FF976A_0%,_#FF3838_100%)] pb-6 pt-[100px]">
          <div
            className={cn(
              'opacity-0',
              activeIndex >= 0 && 'animate-fade-up',
              'flex flex-col items-center justify-center'
            )}
          >
            <h2 className="mx-auto mb-6 mt-4 text-center text-[32px] font-bold text-white-default">
              툭, 건네는 만남
              <br />
              TUK
            </h2>

            <Link
              href="/"
              className="flex h-[56px] w-[236px] cursor-pointer items-center justify-center rounded-[36px] bg-white-default text-center font-bold text-[#FF976A] max-[1280px]:h-12 max-[1280px]:w-[200px] max-[1280px]:text-base"
            >
              툭 제안 보내기
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div
              className={cn(
                'opacity-0',
                activeIndex >= 1 && 'animate-fade-up',
                'mb-8 mt-[100px] px-6'
              )}
            >
              <h4 className="mb-4 text-center text-[22px] font-bold text-white-default">
                가볍게 건네는 만남
              </h4>
              <span className="mx-auto inline-block max-w-[520px] whitespace-pre-line break-keep text-center text-lg text-white-default/80">
                익명으로 전해지는 제안은 조금 더 용기 내기 쉬울거에요
              </span>
            </div>

            <div
              className={cn(
                'opacity-0',
                activeIndex >= 2 && 'animate-fade-up',
                'relative mb-[200px] aspect-[554/714] max-[880px]:mt-10 max-[880px]:w-[296px]'
              )}
            >
              <Image
                src="/mockup-3.webp"
                alt="mockup3"
                fill
                sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                className="object-contain"
              />
            </div>

            <div
              className={cn(
                'opacity-0',
                activeIndex >= 3 && 'animate-fade-up',
                'mb-8 mt-[100px] px-6'
              )}
            >
              <h4 className="mb-4 text-center text-[22px] font-bold text-white-default">
                툭, 우리만의 만남
              </h4>
              <span className="mx-auto inline-block max-w-[520px] whitespace-pre-line break-keep text-center text-lg text-white-default/80">
                모임의 분위기와 성향을 담아 딱 맞는 만남 제안이 가능해요
              </span>
            </div>

            <div
              className={cn(
                'opacity-0',
                activeIndex >= 4 && 'animate-fade-up',
                'relative mb-[200px] aspect-[554/714] max-[880px]:mt-10 max-[880px]:w-[296px]'
              )}
            >
              <Image
                src="/mockup-4.webp"
                alt="mockup4"
                fill
                sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceInfoContentResponsiveSecondSection;
