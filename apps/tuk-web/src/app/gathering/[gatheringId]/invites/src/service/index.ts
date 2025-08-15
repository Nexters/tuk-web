import { GatheringAPIService } from '@/app/gathering/[gatheringId]/invites/src/service/gathering-api.service';
import CONFIG from '@/shared/config';
import { generateRestAPI } from '@/shared/lib/api/rest';

export const gatheringAPIService = new GatheringAPIService(
  generateRestAPI({ baseURL: 'api/v1/gatherings' }, false, CONFIG.BASE_URL)
);
