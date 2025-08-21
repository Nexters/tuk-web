'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type SplashGateProps = {
  /** 최소 표시 시간 (ms) */
  minMs?: number;
  /** 로고 경로 (public/ 기준) */
  logoSrc?: string;
  /** 로고 크기(px) */
  logoSize?: number;
  /** 페이드아웃 시간(ms) */
  fadeMs?: number;
  children: React.ReactNode;
};

export default function SplashGate({
  minMs = 1000,
  fadeMs = 250,
  logoSrc = '/logo.png',
  logoSize = 200,
  children,
}: SplashGateProps) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 최소 표시 시간 보장
    const t = setTimeout(() => {
      // 모션 감소 환경이면 바로 제거
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (media.matches || fadeMs === 0) {
        setShow(false);
      } else {
        setFadeOut(true);
        const t2 = setTimeout(() => setShow(false), fadeMs);
        return () => clearTimeout(t2);
      }
    }, minMs);

    return () => clearTimeout(t);
  }, [minMs, fadeMs]);

  return (
    <>
      {children}

      {show && (
        <div
          aria-busy="true"
          aria-live="polite"
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white-default ${fadeOut ? 'opacity-0 transition-opacity' : 'opacity-100'} `}
          // Tailwind transition-duration 커스텀
          style={{ transitionDuration: `${fadeMs}ms` }}
        >
          <Image src={logoSrc} alt="App Logo" width={logoSize} height={logoSize} priority />
        </div>
      )}
    </>
  );
}
