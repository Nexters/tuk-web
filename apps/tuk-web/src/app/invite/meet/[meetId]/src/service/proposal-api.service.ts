import { ProposalDetailResponse } from '@/app/invite/meet/[meetId]/src/service/schema/get-proposal-detail.schema';
import { RestAPIProtocol } from '@/shared/lib/api/rest';

export class ProposalAPIService {
  constructor(private fetch: RestAPIProtocol) {}

  getProposalDetail(proposalId: number) {
    throw new Error('💥 Test Error: 강제로 발생시킨 에러입니다.');
    return this.fetch.get({
      url: ':proposalId',
      param: {
        proposalId,
      },
      validate: ProposalDetailResponse.parse,
    });
  }
}
