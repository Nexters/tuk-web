'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/lib';

type SplashGateProps = {
  minMs?: number;
  logoSrc?: string;
  logoSize?: number;
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
    const t = setTimeout(() => {
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
          className={cn(
            'fixed inset-0 z-[9999] flex items-center justify-center bg-white-default',
            fadeOut ? 'opacity-0 transition-opacity' : 'opacity-100'
          )}
          style={{ transitionDuration: `${fadeMs}ms` }}
        >
          <Image src={logoSrc} alt="App Logo" width={logoSize} height={logoSize} priority />
        </div>
      )}
    </>
  );
}
