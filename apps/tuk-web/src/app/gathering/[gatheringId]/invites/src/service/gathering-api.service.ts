import { RestAPIProtocol } from '@/shared/lib/api/rest/types';
import { PaginationQuery } from '@/shared/lib/api/types';

export class GatheringAPIService {
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
    });
  }
}
