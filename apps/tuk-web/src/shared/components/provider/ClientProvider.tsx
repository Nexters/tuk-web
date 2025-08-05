'use client';

import { ReactNode } from 'react';

import { AppBridgeProvider } from '@/shared/components/provider/AppBridgeProvider';
import { UserAgentProvider } from '@/shared/components/provider/UserAgentProvider';

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <UserAgentProvider>
      <AppBridgeProvider>
        <div className="mx-auto max-w-[600px]">{children}</div>
      </AppBridgeProvider>
    </UserAgentProvider>
  );
}
