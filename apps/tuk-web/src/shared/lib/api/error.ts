/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { z } from 'zod';

type APIErrorOpts = {
  status?: number;
  meta?: { errorType?: string; errorMessage?: string };
  url?: string;
  method?: string;
  data?: unknown;
  zodError?: z.ZodError;
};

export class APIError extends Error {
  status?: number;
  meta?: APIErrorOpts['meta'];
  url?: string;
  method?: string;
  data?: unknown;
  zodError?: z.ZodError;

  constructor(message: string, opts: APIErrorOpts = {}) {
    super(message);
    this.name = 'APIError';
    Object.assign(this, opts);
    this.log();
  }

  private log() {
    if (process.env.NEXT_PUBLIC_FRONT_URL !== 'http://localhost:3000') return;

    // Zod 에러
    if (this.zodError) {
      const pretty = this.prettyZod(this.zodError);
      console.error(
        `[Zod Validate Log]
- url: ${this.url ?? '(unknown)'}
- method: ${this.method ?? '(unknown)'}
- status: ${this.status ?? '(unknown)'}
- meta: ${JSON.stringify(this.meta ?? {})}
- issues:
${pretty}
- raw:`,
        this.data
      );
      return;
    }

    // 일반 에러
    console.error(
      `[API Error]
- url: ${this.url}
- method: ${this.method}
- status: ${this.status}
- meta: ${JSON.stringify(this.meta)}
- raw:`,
      this.data
    );
  }

  private prettyZod(err: z.ZodError) {
    return err.issues
      .map((issue, i) => {
        const path = issue.path.join(' -> ') || '(root)';

        const exp = 'expected' in issue ? String((issue as any).expected) : '';
        const rec = 'received' in issue ? String((issue as any).received) : '';
        return `${i + 1}. path: ${path}
   code: ${issue.code}
   message: ${issue.message}${exp ? `\n   expected: ${exp}` : ''}${rec ? `\n   received: ${rec}` : ''}`;
      })
      .join('\n');
  }
}
