import { ChevronDown, Download, Smartphone } from 'lucide-react';

import heroImage from '@/assets/hero-image.jpg';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="text-white relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="animate-fade-up">
          <p className="mb-4 text-lg font-medium opacity-90 md:text-xl">
            연락이 뜸해진 지인들과 다시
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            자연스럽게 만나는
            <br />앱 리킨들
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl">
            부담스럽지 않게, 앱이 대신 제안해주는
            <br />
            따뜻한 모임의 시작
          </p>
        </div>

        {/* App Store Buttons */}
        <div className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-black/80 hover:bg-black text-white shadow-glow transition-spring min-w-[200px] rounded-xl px-8 py-6 text-lg hover:scale-105"
          >
            <Smartphone className="mr-3 size-6" />
            App Store
          </Button>
          <Button
            size="lg"
            className="bg-black/80 hover:bg-black text-white shadow-glow transition-spring min-w-[200px] rounded-xl px-8 py-6 text-lg hover:scale-105"
          >
            <Download className="mr-3 size-6" />
            Google Play
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-white absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-8" />
      </div>
    </section>
  );
};
