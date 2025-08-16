import { z } from 'zod';

import { CreateResponseSchema } from '@/shared/lib/api/schema';

export const ProposalDetailSchema = z.object({
  proposalId: z.number(),
  gatheringId: z.number(),
  gatheringName: z.string(),
  purpose: z.string(),
  relativeTime: z.string(),
});

export const ProposalDetailResponse = CreateResponseSchema(ProposalDetailSchema);
