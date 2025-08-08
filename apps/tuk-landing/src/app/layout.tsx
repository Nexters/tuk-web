import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'TUK',
  description: '툭, 건네는 만남 TUK',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>{children}</body>
    </html>
  );
}
