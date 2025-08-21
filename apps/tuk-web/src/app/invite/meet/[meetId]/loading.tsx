'use client';

import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white-default">
      <Image src="/logo.png" alt="App Logo" width={200} height={200} priority />
    </div>
  );
}
