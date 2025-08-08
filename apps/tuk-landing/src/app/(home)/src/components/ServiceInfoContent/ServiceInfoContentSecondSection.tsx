import Image from 'next/image';
import Link from 'next/link';

import { useSequentialFadeIn } from '@/app/(home)/src/components/useSequentialFadeIn';
import { cn } from '@/shared/lib';

const ServiceInfoContentSecondSection = () => {
  const { ref, activeIndex } = useSequentialFadeIn(5, 300);

  return (
    <div className="block max-[880px]:hidden" ref={ref}>
      <section className="grid select-none grid-cols-2">
        <div className="overflow-hidden bg-white-default pt-[300px] max-[1280px]:pt-[200px]">
          <div
            className={cn(
              'opacity-0',
              activeIndex >= 0 && 'animate-fade-up',
              'mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]'
            )}
          >
            <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
              가볍게 건네는 만남
            </h4>
            <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
              익명으로 전해지는 제안은 조금 더 용기 내기 쉬울거에요
            </span>
          </div>
          <div
            className={cn(
              'opacity-0',
              activeIndex >= 1 && 'animate-fade-up',
              'relative mb-[200px] mt-10 aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]'
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
              'mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]'
            )}
          >
            <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
              툭, 우리만의 만남
            </h4>
            <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
              모임의 분위기와 성향을 담아 딱 맞는 만남 제안이 가능해요
            </span>
          </div>
          <div
            className={cn(
              'opacity-0',
              activeIndex >= 4 && 'animate-fade-up',
              'relative mb-[200px] mt-10 aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]'
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

        <div className="sticky top-0 flex h-[calc(var(--vh,1vh)*100)] justify-end bg-[linear-gradient(135deg,_#FF976A_0%,_#FF3838_100%)] pt-[320px] max-[1280px]:pt-[200px]">
          <div className="w-[640px] pl-[70px] max-[1280px]:w-[440px] max-[1280px]:pl-6">
            <div
              className={cn(
                'opacity-0',
                activeIndex >= 2 && 'animate-fade-up',
                'w-[456px] max-[1280px]:w-[308px]'
              )}
            >
              <h2 className="mb-8 mt-5 text-[48px] font-bold text-white-default max-[1280px]:mt-4 max-[1280px]:text-[40px]">
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
      </section>
    </div>
  );
};

export default ServiceInfoContentSecondSection;
