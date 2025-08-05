import { ButtonHTMLAttributes, HTMLAttributes } from 'react';

import { cn } from '@/shared/lib';

export const Header = ({ children, className }: HTMLAttributes<HTMLHeadElement>) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 flex h-16 items-center justify-between bg-white-default px-5 py-4',
        className
      )}
    >
      {children}
    </header>
  );
};

const HeaderLeft = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center gap-[0.3125rem]', className)} {...props}>
    {children}
  </div>
);

const HeaderButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const HeaderLeftText = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('serif-body-18-M', className)} {...props}>
    {children}
  </p>
);

const HeaderCenter = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const HeaderRight = ({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props}>
    {children}
  </div>
);

Header.Left = HeaderLeft;
Header.LeftText = HeaderLeftText;
Header.Button = HeaderButton;
Header.Center = HeaderCenter;
Header.Right = HeaderRight;
