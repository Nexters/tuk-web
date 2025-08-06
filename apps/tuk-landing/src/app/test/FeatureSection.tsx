import { useEffect, useRef, useState } from 'react';

import { ParallaxWrapper } from './ParallaxWrapper';

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  features?: string[];
}

export const FeatureSection = ({
  title,
  description,
  image,
  reverse = false,
  features = [],
}: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'translate-x-8 opacity-0'}`}
            >
              <h2 className="text-foreground text-3xl font-bold leading-tight lg:text-5xl">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed lg:text-xl">
                {description}
              </p>

              {features.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={`text-foreground flex items-center transition-all duration-700 ${
                        isVisible ? 'animate-fade-up' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-accent mr-4 size-2 shrink-0 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-1 justify-center">
            <ParallaxWrapper speed={0.3}>
              <div
                className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-right' : 'translate-x-8 opacity-0'}`}
              >
                <div className="relative">
                  <div className="bg-accent/10 absolute inset-0 rotate-3 scale-105 rounded-3xl" />
                  <img
                    src={image}
                    alt={title}
                    className="shadow-glow relative z-10 h-auto w-full max-w-md rounded-3xl object-cover"
                  />
                </div>
              </div>
            </ParallaxWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
