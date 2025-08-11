import { z } from 'zod';

export type ApiMeta = {
  errorType?: string;
  errorMessage?: string;
};

export type ApiEnvelope<T> = {
  success: boolean;
  data: T;
  meta?: ApiMeta;
};

export class APIError extends Error {
  public status?: number;
  public meta?: ApiMeta;
  public url?: string;
  public method?: string;

  constructor(
    message: string,
    opts?: { status?: number; meta?: ApiMeta; url?: string; method?: string }
  ) {
    super(message);
    this.name = 'APIError';
    this.status = opts?.status;
    this.meta = opts?.meta;
    this.url = opts?.url;
    this.method = opts?.method;
  }
}

export function wrapZodError(err: unknown, url?: string, method?: string): never {
  if (err instanceof z.ZodError) {
    const issues = err.issues
      .map(i => `${i.path.join('.') || '(root)'}: ${i.message}`)
      .join('\n - ');
    const msg = `Zod validation failed:\n - ${issues}`;
    throw new APIError(msg, {
      meta: { errorType: 'ZOD_ERROR', errorMessage: msg },
      url,
      method,
    });
  }
  throw err;
}

export type PaginationQuery = {
  page: number;
  pageSize: number;
};
