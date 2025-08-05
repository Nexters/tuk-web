import * as React from 'react';

import { IconProps } from '@/shared/components/icon/types';

export const CloseIcon32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M24.8486 7.84863L16.7002 15.9961L25.7041 25L24.8555 25.8486L15.8516 16.8447L6.84863 25.8486L6 25L15.0029 15.9961L6.85547 7.84863L7.7041 7L15.8516 15.1475L24 7L24.8486 7.84863Z"
          fill={color}
        />
      </svg>
    );
  }
);
CloseIcon32.displayName = 'CloseIcon32';

<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path
    d="M24.8486 7.84863L16.7002 15.9961L25.7041 25L24.8555 25.8486L15.8516 16.8447L6.84863 25.8486L6 25L15.0029 15.9961L6.85547 7.84863L7.7041 7L15.8516 15.1475L24 7L24.8486 7.84863Z"
    fill="black"
  />
</svg>;
