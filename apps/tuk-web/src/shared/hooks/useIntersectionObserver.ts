import { useEffect, useRef, useState } from 'react';

type Options = {
  onIntersect?: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
  enabled?: boolean;
  once?: boolean;
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useIntersectionObserver({
  onIntersect,
  enabled = true,
  once = false,
  root = null,
  rootMargin = '200px 0px',
  threshold = 0,
}: Options = {}) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el || !enabled) return;

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          onIntersect?.(entry, observerRef.current!);
          if (once) observerRef.current?.disconnect();
        }
      },
      { root, rootMargin, threshold }
    );

    observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, [enabled, once, root, rootMargin, threshold, onIntersect]);

  return { targetRef, isIntersecting };
}
