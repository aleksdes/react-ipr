import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.ALBUMS_URL;

export const Api = {
  ...baseRequestApi(URL),
};
