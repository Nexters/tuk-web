import { GatheringAPIService } from '@/app/gathering/[gatheringId]/invites/src/service/gathering-api.service';
import { generateRestAPI } from '@/shared/lib/api/rest';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const gatheringAPIService = new GatheringAPIService(
  generateRestAPI({ baseURL: 'api/v1/gatherings' }, false, BASE_URL)
);
