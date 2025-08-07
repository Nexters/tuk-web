import Image from 'next/image';
import Link from 'next/link';

const ServiceInfoSection = () => {
  return (
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
                    보고는 싶지만 먼저 연락하기 어려울 때, 넌지시 모임 만남에 대한 제안을 해보세요.
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

          <div className="overflow-hidden bg-white-default pt-[300px] max-[1280px]:pt-[200px]">
            <div className="mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]">
              <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
                만남의 타이밍
              </h4>
              <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
                설정한 주기에 따라, 자연스럽게 만남을 제안하는 알림이 도착해요
              </span>
            </div>
            <div className="relative mb-[200px] mt-10 aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]">
              <Image
                src="/mockup-1.png"
                alt="mockup1"
                fill
                sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                className="object-contain"
              />
            </div>

            <div className="mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]">
              <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
                우리만의 제안
              </h4>
              <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
                늘 같은 인삿말 말고, 우리만의 이야기로 만든 초대장을 보낼 수 있어요
              </span>
            </div>
            <div className="relative mb-[200px] mt-10 aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]">
              <Image
                src="/mockup-2.png"
                alt="mockup2"
                fill
                sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="block max-[880px]:hidden">
        <section className="grid select-none grid-cols-2">
          <div className="overflow-hidden bg-white-default pt-[300px] max-[1280px]:pt-[200px]">
            <div className="mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]">
              <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
                가볍게 건네는 만남
              </h4>
              <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
                익명으로 전해지는 제안은 조금 더 용기 내기 쉬울거에요
              </span>
            </div>
            <div className="relative mb-[200px] mt-10 aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]">
              <Image
                src="/mockup-3.png"
                alt="mockup3"
                fill
                sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                className="object-contain"
              />
            </div>

            <div className="mb-5 ml-[98px] mr-[70px] w-[468px] max-[1280px]:ml-[70px] max-[1280px]:mr-[60px] max-[1280px]:w-[332px]">
              <h4 className="mb-5 text-[26px] font-bold text-[#1f1f1f] max-[1280px]:mb-4 max-[1280px]:text-[22px]">
                툭, 우리만의 만남
              </h4>
              <span className="inline-block whitespace-pre-line break-keep text-xl text-[rgba(58,58,58,0.7)] max-[1280px]:text-lg">
                모임의 분위기와 성향을 담아 딱 맞는 만남 제안이 가능해요
              </span>
            </div>
            <div className="relative mb-[200px] mt-10 aspect-[554/714] w-[554px] max-[1280px]:w-[464px] max-[880px]:mt-10 max-[880px]:w-[296px]">
              <Image
                src="/mockup-4.png"
                alt="mockup4"
                fill
                sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="sticky top-0 flex h-[calc(var(--vh,1vh)*100)] justify-end bg-[linear-gradient(135deg,_#FF976A_0%,_#FF3838_100%)] pt-[320px] max-[1280px]:pt-[200px]">
            <div className="w-[640px] pl-[70px] max-[1280px]:w-[440px] max-[1280px]:pl-6">
              <div className="w-[456px] max-[1280px]:w-[308px]">
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

      <div className="hidden max-[880px]:block">
        <section>
          <div className="flex flex-col items-center bg-[linear-gradient(135deg,_#FF976A_0%,_#FF3838_100%)] pb-6 pt-[100px]">
            <div className="flex flex-col items-center justify-center">
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
              <div className="mb-8 mt-[100px] px-6">
                <h4 className="mb-4 text-center text-[22px] font-bold text-white-default">
                  만남의 타이밍
                </h4>
                <span className="mx-auto inline-block max-w-[520px] whitespace-pre-line break-keep text-center text-lg text-white-default/80">
                  설정한 주기에 따라, 자연스럽게 만남을 제안하는 알림이 도착해요
                </span>
              </div>
              <div className="relative mb-[200px] aspect-[554/714] max-[880px]:mt-10 max-[880px]:w-[296px]">
                <Image
                  src="/mockup-1.png"
                  alt="mockup1"
                  fill
                  sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                  className="object-contain"
                />
              </div>

              <div className="mb-8 mt-[100px] px-6">
                <h4 className="mb-4 text-center text-[22px] font-bold text-white-default">
                  우리만의 제안
                </h4>
                <span className="mx-auto inline-block max-w-[520px] whitespace-pre-line break-keep text-center text-lg text-white-default/80">
                  늘 같은 인삿말 말고, 우리만의 이야기로 만든 초대장을 보낼 수 있어요
                </span>
              </div>
              <div className="relative mb-[200px] aspect-[554/714] max-[880px]:mt-10 max-[880px]:w-[296px]">
                <Image
                  src="/mockup-2.png"
                  alt="mockup2"
                  fill
                  sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="hidden max-[880px]:block">
        <section>
          <div className="flex flex-col items-center bg-[linear-gradient(135deg,_#FF976A_0%,_#FF3838_100%)] pb-6 pt-[100px]">
            <div className="flex flex-col items-center justify-center">
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
              <div className="mb-8 mt-[100px] px-6">
                <h4 className="mb-4 text-center text-[22px] font-bold text-white-default">
                  가볍게 건네는 만남
                </h4>
                <span className="mx-auto inline-block max-w-[520px] whitespace-pre-line break-keep text-center text-lg text-white-default/80">
                  익명으로 전해지는 제안은 조금 더 용기 내기 쉬울거에요
                </span>
              </div>
              <div className="relative mb-[200px] aspect-[554/714] max-[880px]:mt-10 max-[880px]:w-[296px]">
                <Image
                  src="/mockup-3.png"
                  alt="mockup3"
                  fill
                  sizes="(max-width: 880px) 296px, (max-width: 1280px) 464px, 554px"
                  className="object-contain"
                />
              </div>

              <div className="mb-8 mt-[100px] px-6">
                <h4 className="mb-4 text-center text-[22px] font-bold text-white-default">
                  툭, 우리만의 만남
                </h4>
                <span className="mx-auto inline-block max-w-[520px] whitespace-pre-line break-keep text-center text-lg text-white-default/80">
                  모임의 분위기와 성향을 담아 딱 맞는 만남 제안이 가능해요
                </span>
              </div>
              <div className="relative mb-[200px] aspect-[554/714] max-[880px]:mt-10 max-[880px]:w-[296px]">
                <Image
                  src="/mockup-4.png"
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
    </div>
  );
};

export default ServiceInfoSection;
