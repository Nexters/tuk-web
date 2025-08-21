'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  const [inView, setInView] = useState(false);

  const handleMobileDownload = () => {
    if (typeof navigator === 'undefined') {
      window.location.href = 'https://tuk.kr';
      return;
    }

    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.includes('android');

    if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.plottwist.tuk';
    } else {
      window.location.href =
        'https://apps.apple.com/kr/app/%ED%88%AD-%EB%A7%8C%EB%82%A8%EC%9D%84-%EB%84%8C%EC%A7%80%EC%8B%9C/id6749781762';
    }
  };

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={footerRef}>
      <div className="relative w-full">
        <Image
          src="/footer-bg.webp"
          alt="footer background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black-default/70" />

        <div className="relative z-10 m-auto max-w-screen-xl overflow-hidden px-[70px] pb-[162px] pt-[180px] max-[1280px]:max-w-[880px] max-[1280px]:px-6 max-[1280px]:pb-[172px] max-[1280px]:pt-[208px] max-[880px]:flex max-[880px]:flex-col max-[880px]:items-center max-[880px]:pb-[70px] max-[880px]:pt-[72px]">
          <h2 className="text-[48px] font-bold text-white-default max-[1280px]:text-[40px] max-[880px]:text-center max-[880px]:text-[36px]">
            우리의 만남을 위해
            <br /> TUK
          </h2>

          <div className="mb-[60px] mt-8 text-[20px] font-medium text-white-default/50 max-[1280px]:mb-[52px] max-[1280px]:mt-8 max-[1280px]:text-[19px] max-[880px]:mb-6 max-[880px]:mt-4 max-[880px]:text-center max-[880px]:text-base">
            단톡방은 살아있지만, 모임은 사라진 사이에게
          </div>

          <div className="flex gap-3 max-[880px]:hidden">
            <Link
              href="https://apps.apple.com/kr/app/%ED%88%AD-%EB%A7%8C%EB%82%A8%EC%9D%84-%EB%84%8C%EC%A7%80%EC%8B%9C/id6749781762"
              className="flex h-[3.625rem] w-[10.75rem] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-white-default/20 bg-black-default/30 text-sm font-bold text-white-default"
            >
              <Image src="/app-store.webp" alt="appStoreImg" width={24} height={24} />
              App Store
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.plottwist.tuk"
              className="flex h-[3.625rem] w-[10.75rem] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-white-default/20 bg-black-default/30 text-sm font-bold text-white-default"
            >
              <Image src="/play-store.webp" alt="playStoreImg" width={24} height={24} />
              Google Play
            </Link>
          </div>

          <div className="min-[881px]:hidden">
            <button
              onClick={handleMobileDownload}
              className="flex h-[52px] w-[153px] cursor-pointer items-center justify-center rounded-[36px] bg-white-default text-center font-bold text-[rgba(58,58,58,0.9)]"
            >
              앱 다운로드
            </button>
          </div>
        </div>
      </div>

      <footer className="mx-auto min-w-[280px] max-w-screen-xl bg-[rgb(250,250,250)] px-[70px] pb-[40px] pt-[30px] max-[1280px]:max-w-[880px] max-[1280px]:px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#1f1f1f]">(주)Tuk</h3>
          <ul className="flex gap-2">
            <li className="size-8">
              <Link href="/">
                <Image src="/insta.webp" alt="instaImg" width={32} height={32} />
              </Link>
            </li>
            <li className="size-8">
              <Link href="/">
                <Image src="/kakao.webp" alt="kakaoImg" width={32} height={32} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="flex flex-wrap items-center text-[11px] font-bold leading-5 text-[rgb(58,58,58)]">
              <Link href="https://tuk.kr/service-policy" target="_blank">
                서비스 이용약관
              </Link>
              <div className="mx-1.5 h-2 w-px bg-[rgb(58,58,58)]" />
              <Link href="https://tuk.kr/privacy-policy" target="_blank">
                개인정보 처리방침
              </Link>
              <div className="mx-1.5 h-2 w-px bg-[rgb(58,58,58)]" />
              <Link href="https://forms.gle/BBAQeiuYZUo7CHQv6" target="_blank">
                문의하기
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-1.5 mt-5 text-[11px] font-medium leading-[17px] text-[rgba(58,58,58,0.5)]">
          ⓒ 2025. (주)Tuk Co. Ltd. All rights reserved.
        </div>
      </footer>

      {inView && (
        <div className="fixed inset-x-0 bottom-0 z-[-1] h-[300px] bg-[rgb(250,250,250)]" />
      )}
    </section>
  );
};

export default Footer;
