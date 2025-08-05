import React from 'react';

import { IconProps } from '@/shared/components/icon/types';

export const LeftArrowIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.7725 10.8477L8.2959 16.3242H25.8486V17.5234H8.2959L13.7725 23L12.9248 23.8477L6.4248 17.3477L6 16.9238L6.4248 16.5L12.9248 10L13.7725 10.8477Z"
          fill={color}
        />
      </svg>
    );
  }
);
LeftArrowIcon.displayName = 'LeftArrowIcon';
