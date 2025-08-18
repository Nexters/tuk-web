import { z } from 'zod';

import { CreateResponseSchema } from '@/shared/lib/api/schema';

export const ProposalDetailSchema = z.object({
  proposalId: z.number(),
  gatheringId: z.number().nullable(),
  gatheringName: z.string().nullable(),
  purpose: z.string(),
  relativeTime: z.string(),
});

export const ProposalDetailResponse = CreateResponseSchema(ProposalDetailSchema);

export type ProposalDetailType = z.infer<typeof ProposalDetailSchema>;
