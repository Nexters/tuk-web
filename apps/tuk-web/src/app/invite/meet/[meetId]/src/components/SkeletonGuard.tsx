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
      {/* 콘텐츠 영역 */}
      <div
        className={`transition-opacity duration-200 ${showSkeleton ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>

      {/* 오버레이 스켈레톤: 최소 minMs 동안은 확실히 보이게 */}
      {showSkeleton && <div className="absolute inset-0">{skeleton}</div>}
    </div>
  );
}
