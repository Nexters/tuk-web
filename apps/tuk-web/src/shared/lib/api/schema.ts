/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

export const MetaSchema = z
  .object({
    errorType: z.string().optional(),
    errorMessage: z.string().optional(),
  })
  .optional();

export const ResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema,
    meta: MetaSchema,
  });

export type Envelope<T> = {
  success: boolean;
  data: T;
  meta?: {
    errorType?: string;
    errorMessage?: string;
  };
};

export const CreateResponseSchema = <T extends z.ZodTypeAny>(schema: T) => {
  const EnvelopeSchema = ResponseSchema(schema);
  return {
    parse: (response: unknown) => EnvelopeSchema.parse(response) as Envelope<z.infer<T>>,
  };
};

export const PaginationSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    hasNext: z.boolean(),
    size: z.number(),
    pageNumber: z.number(),
    content: z.array(itemSchema),
  });

export type Page<T> = {
  hasNext: boolean;
  size: number;
  pageNumber: number;
  content: T[];
};

export const CreatePageResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) => {
  const PageSchema = PaginationSchema(itemSchema);
  const EnvelopeSchema = ResponseSchema(PageSchema);

  return {
    parse: (response: unknown) => EnvelopeSchema.parse(response) as Envelope<Page<z.infer<T>>>,
  };
};
