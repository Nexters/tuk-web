import { GatheringNameResponse } from '@/app/invite/gathering/[gatheringId]/src/service/schema/get-gathering-name.schema';
import { RestAPIProtocol } from '@/shared/lib/api/rest';

export class GatheringAPIService {
  constructor(private fetch: RestAPIProtocol) {}

  getGatheringName(gatheringId: number) {
    // throw new Error('강제 에러 발생: GatheringAPIService.getGatheringName');

    return this.fetch.get({
      url: ':gatheringId/name',
      param: {
        gatheringId,
      },
      validate: GatheringNameResponse.parse,
    });
  }
}
