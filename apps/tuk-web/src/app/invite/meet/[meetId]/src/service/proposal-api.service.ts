import { ProposalDetailResponse } from '@/app/invite/meet/[meetId]/src/service/schema/get-proposal-detail.schema';
import { RestAPIProtocol } from '@/shared/lib/api/rest';

export class ProposalAPIService {
  constructor(private fetch: RestAPIProtocol) {}

  getProposalDetail(proposalId: number) {
    return this.fetch.get({
      url: ':proposalId',
      param: {
        proposalId,
      },
      validate: ProposalDetailResponse.parse,
    });
  }
}
