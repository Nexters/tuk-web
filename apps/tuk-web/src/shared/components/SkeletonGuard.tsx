// components/SkeletonGuard.tsx
'use client';
import { ReactNode, useEffect, useState } from 'react';

export default function SkeletonGuard({
  minMs = 250,
  skeleton,
  children,
}: {
  minMs?: number;
  skeleton: ReactNode;
  children: ReactNode;
}) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSkeleton(false), minMs);
    return () => clearTimeout(t);
  }, [minMs]);

  return (
    <div className="relative">
      <div
        className={`transition-opacity duration-200 ${showSkeleton ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>

      {showSkeleton && <div className="absolute inset-0">{skeleton}</div>}
    </div>
  );
}
