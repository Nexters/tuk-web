import { z } from 'zod';

import { CreateResponseSchema } from '@/shared/lib/api/schema';

export const GatheringNameSchema = z.object({
  gatheringId: z.number(),
  gatheringName: z.string(),
});

export const GatheringNameResponse = CreateResponseSchema(GatheringNameSchema);
