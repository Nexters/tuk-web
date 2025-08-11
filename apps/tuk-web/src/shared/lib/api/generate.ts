import { RestAPIConfig } from '@/shared/lib/api/types';

export function generateRestAPI(
  config: RestAPIConfig,
  isForm: boolean = false,
  baseURL: string = process.env.NEXT_PUBLIC_BASE_URL ?? '',
  legacy?: boolean
) {
  return new RestAPI(
    isForm ? restAPIInstanceByForm(baseURL) : restAPIInstance(baseURL, legacy),
    config
  );
}
