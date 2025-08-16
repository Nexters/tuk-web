import { ProposalPageResponse } from '@/app/gathering/[gatheringId]/invites/src/service/schema/get-gathering-proposals.schema';
import { RestAPIProtocol } from '@/shared/lib/api/rest/types';
import { PaginationQuery } from '@/shared/lib/api/types';

export class GatheringProposalAPIService {
  constructor(private fetch: RestAPIProtocol) {}

  getGatheringProposals(gatheringId: number, type: 'SENT' | 'RECEIVED', page: PaginationQuery) {
    return this.fetch.get({
      url: ':gatheringId/proposals/:type',
      param: {
        gatheringId,
        type,
      },
      query: {
        ...page,
      },
      validate: ProposalPageResponse.parse,
    });
  }
}
