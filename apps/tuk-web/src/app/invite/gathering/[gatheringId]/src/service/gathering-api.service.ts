import { GatheringNameResponse } from '@/app/invite/gathering/[gatheringId]/src/service/schema/get-gathering-name.schema';
import { RestAPIProtocol } from '@/shared/lib/api/rest';

export class GatheringAPIService {
  constructor(private fetch: RestAPIProtocol) {}

  getGatheringName(gatheringId: number) {
    return this.fetch.get({
      url: ':gatheringId/name',
      param: {
        gatheringId,
      },
      validate: GatheringNameResponse.parse,
    });
  }
}
