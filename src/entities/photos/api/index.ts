import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.PHOTOS_URL;

export const Api = {
  ...baseRequestApi(URL),
};
