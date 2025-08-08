import { useEffect, useRef, useState } from 'react';

export const useSequentialFadeIn = (steps: number, delay: number = 300) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && activeIndex === -1) {
          for (let i = 0; i < steps; i++) {
            setTimeout(() => {
              setActiveIndex(prev => Math.max(prev, i));
            }, i * delay);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, steps, delay, activeIndex]);

  return { ref, activeIndex };
};
