import { GatheringProposalAPIService } from '@/app/gathering/[gatheringId]/invites/src/service/gathering-proposal-api.service';
import CONFIG from '@/shared/config';
import { generateRestAPI } from '@/shared/lib/api/rest';

export const gatheringProposalAPIService = new GatheringProposalAPIService(
  generateRestAPI({ baseURL: 'api/v1/gatherings' }, false, CONFIG.BASE_URL)
);
