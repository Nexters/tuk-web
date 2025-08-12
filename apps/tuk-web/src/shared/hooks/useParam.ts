'use client';

import { useParams } from 'next/navigation';

export const useParam = (query: string) => {
  const params = useParams();

  return params[query] as string;
};
