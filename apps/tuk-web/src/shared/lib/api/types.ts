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
    const msg = generateZodError(err);

    // eslint-disable-next-line no-console
    console.error(
      `[Zod Validate Log]\n api-url: ${url || 'endpoint'}\n`,
      `metod: ${method}\n`,
      err
    );

    throw new APIError(msg, {
      meta: { errorType: 'ZOD_ERROR', errorMessage: msg },
      url,
      method,
    });
  }
  throw err;
}

export type PaginationQuery = {
  pageNumber: number;
  pageSize: number;
};

const generateZodError = (error: z.ZodError) => {
  let message = '';
  error.errors.forEach(issue => {
    if (issue.code === 'invalid_type' || issue.code === 'invalid_literal') {
      message = `Error: Invalid data at path ${issue.path.join(' -> ')}
- Code: ${issue.code}
- Expected: ${issue.expected}
- Received: ${issue.received}
- Message: ${issue.message}`;
    }
  });

  return message;
};
