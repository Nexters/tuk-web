'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export interface UserAgent {
  rawUA: string;
  isIOS: boolean;
  isAndroid: boolean;
  isMobile: boolean;
}

export const UserAgentContext = createContext<UserAgent | null>(null);

export function UserAgentProvider({ children }: { children: ReactNode }) {
  const [userAgent, setUserAgent] = useState<UserAgent | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = ua.includes('iphone') || ua.includes('ipad');
    const isAndroid = ua.includes('android');

    setUserAgent({
      isIOS,
      isAndroid,
      rawUA: ua,
      isMobile: isIOS || isAndroid,
    });
  }, []);

  return <UserAgentContext.Provider value={userAgent}>{children}</UserAgentContext.Provider>;
}

export function useUserAgent(): UserAgent {
  const userAgent = useContext(UserAgentContext);

  if (typeof window === 'undefined') {
    return {
      isAndroid: false,
      isIOS: false,
      isMobile: false,
      rawUA: '',
    };
  }

  return (
    userAgent ?? {
      isAndroid: false,
      isIOS: false,
      isMobile: false,
      rawUA: '',
    }
  );
}
