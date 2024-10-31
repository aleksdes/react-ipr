import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.GROUPS_URL;

export const Api = {
  ...baseRequestApi(URL),
};
