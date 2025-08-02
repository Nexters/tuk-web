import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-title-26-M',
        'text-title-24-M',
        'text-body-16-R',
        'text-body-16-M',
        'text-body-14-M',
        'text-body-14-R',
        'text-body-12-B',
        'text-body-12-M',
        'text-body-12-R',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
