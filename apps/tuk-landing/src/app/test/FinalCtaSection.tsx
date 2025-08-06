import { Download, Smartphone, Users, Heart } from 'lucide-react';

import { ParallaxWrapper } from './ParallaxWrapper';

import { Button } from '@/components/ui/button';

export const FinalCTASection = () => {
  return (
    <section className="soft-gradient py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <ParallaxWrapper speed={0.2}>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            {/* Icon */}
            <div className="animate-float flex justify-center">
              <div className="bg-accent text-accent-foreground shadow-glow flex size-20 items-center justify-center rounded-full">
                <Heart className="size-10" />
              </div>
            </div>

            {/* Heading */}
            <div className="animate-fade-up space-y-4">
              <h2 className="text-foreground text-3xl font-bold leading-tight lg:text-5xl">
                따뜻한 연결의 시작
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed lg:text-xl">
                리킨들과 함께 소중한 사람들과의
                <br />
                관계를 다시 이어보세요
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="animate-fade-up space-y-4 text-center">
                <div className="bg-accent/10 text-accent mx-auto flex size-16 items-center justify-center rounded-full">
                  <Users className="size-8" />
                </div>
                <h3 className="text-foreground text-xl font-semibold">자동 제안</h3>
                <p className="text-muted-foreground">앱이 알아서 모임을 제안해드려요</p>
              </div>

              <div
                className="animate-fade-up space-y-4 text-center"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="bg-accent/10 text-accent mx-auto flex size-16 items-center justify-center rounded-full">
                  <Heart className="size-8" />
                </div>
                <h3 className="text-foreground text-xl font-semibold">부담 없는 연결</h3>
                <p className="text-muted-foreground">익명으로도 제안할 수 있어요</p>
              </div>

              <div
                className="animate-fade-up space-y-4 text-center"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="bg-accent/10 text-accent mx-auto flex size-16 items-center justify-center rounded-full">
                  <Smartphone className="size-8" />
                </div>
                <h3 className="text-foreground text-xl font-semibold">간편한 사용</h3>
                <p className="text-muted-foreground">YES/NO로 간단하게 응답하세요</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="hero-gradient text-primary-foreground shadow-glow transition-spring min-w-[200px] rounded-xl px-8 py-6 text-lg hover:scale-105"
              >
                <Smartphone className="mr-3 size-6" />
                App Store
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-spring min-w-[200px] rounded-xl border-2 px-8 py-6 text-lg hover:scale-105"
              >
                <Download className="mr-3 size-6" />
                Google Play
              </Button>
            </div>
          </div>
        </ParallaxWrapper>
      </div>
    </section>
  );
};
