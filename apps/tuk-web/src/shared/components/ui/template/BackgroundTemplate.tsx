import { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib';

type DefaultComponentProps = PropsWithChildren & { className?: string };

const BackgroundRoot = ({ children, className }: DefaultComponentProps) => {
  return <div className={cn('', className)}>{children}</div>;
};

const Background = ({ children, className }: DefaultComponentProps) => {
  return (
    <div className={cn('relative h-screen w-full overflow-hidden', className)}>{children}</div>
  );
};

const BackgroundTemplateGradient = ({ className }: DefaultComponentProps) => {
  return (
    <div
      className={cn(
        'absolute left-[-259px] top-[244px] z-0 h-[406px] w-[898px] bg-gradient-to-b from-[#FFA098] via-[#FFAC85] to-[#FFFEFE] blur-[100px]',
        className
      )}
    />
  );
};

const BackgroundTemplateCTA = ({ children, className }: DefaultComponentProps) => {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-1/2 z-30 w-full max-w-[600px] -translate-x-1/2 bg-gradient-to-b from-white-default/0 to-white-default px-5 py-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BackgroundTemplate = Object.assign(BackgroundRoot, {
  Main: Background,
  Gradient: BackgroundTemplateGradient,
  CTA: BackgroundTemplateCTA,
});
