import type { Metadata } from 'next';

import ClientProvider from '@/shared/components/provider/ClientProvider';
import ReactQueryProvider from '@/shared/components/provider/ReactQueryProvider';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'TUK',
  description: '툭, 건네는 만남 TUK',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ClientProvider>{children}</ClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
