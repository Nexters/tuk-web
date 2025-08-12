/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect } from 'react';

import { useUserAgent } from '@/shared/components/provider/UserAgentProvider';
import { AppBridgeMessage, convertToAndroidAppBridge, convertToIOSAppBridge } from '@/shared/lib';
import { setBridgeSender } from '@/shared/lib/app-bridge/bridgeSender';

interface AppBridgeProviderProps {
  children: ReactNode;
}

interface AppBridge {
  send: (message: AppBridgeMessage) => void;
}

export const AppBridgeContext = createContext<null | AppBridge>(null);

export function AppBridgeProvider({ children }: AppBridgeProviderProps) {
  const userAgent = useUserAgent();

  const isIOS = userAgent.isIOS;

  const send = (message: AppBridgeMessage) => {
    try {
      if (isIOS) return convertToIOSAppBridge(message);
      return convertToAndroidAppBridge(message);
    } catch {
      alert('App Bridge API called: ' + message.type);
    }
  };

  useEffect(() => {
    setBridgeSender(msg => send(msg as any));
    return () => setBridgeSender(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppBridgeContext.Provider value={{ send }}>{children}</AppBridgeContext.Provider>;
}

export function useAppBridge() {
  const appBridge = useContext(AppBridgeContext);

  if (appBridge == null) {
    throw new Error('Wrap App Bridge Provider');
  }

  return appBridge;
}
