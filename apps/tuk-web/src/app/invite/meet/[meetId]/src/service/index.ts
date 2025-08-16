import { ProposalAPIService } from '@/app/invite/meet/[meetId]/src/service/proposal-api.service';
import CONFIG from '@/shared/config';
import { generateRestAPI } from '@/shared/lib/api/rest';

export const proposalAPIService = new ProposalAPIService(
  generateRestAPI({ baseURL: 'api/v1/proposals' }, false, CONFIG.BASE_URL)
);
