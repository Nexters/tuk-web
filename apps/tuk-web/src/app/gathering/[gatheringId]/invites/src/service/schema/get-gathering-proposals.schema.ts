import { z } from 'zod';

import { CreatePageResponseSchema } from '@/shared/lib/api/schema';

export const ProposalItemSchema = z.object({
  proposalId: z.number(),
  gatheringName: z.string(),
  purpose: z.string(),
  relativeTime: z.string(),
});

export const ProposalPageResponse = CreatePageResponseSchema(ProposalItemSchema);

export type ProposalItemType = z.infer<typeof ProposalItemSchema>;
