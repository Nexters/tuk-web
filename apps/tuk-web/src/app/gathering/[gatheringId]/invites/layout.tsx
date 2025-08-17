'use client';
import TokenProvider from '@/shared/components/TokenProvider';

export default function InvitesLayout({ children }: { children: React.ReactNode }) {
  return <TokenProvider>{children}</TokenProvider>;
}
