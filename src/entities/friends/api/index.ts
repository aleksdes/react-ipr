import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.FRIENDS_URL;

export const Api = {
  ...baseRequestApi(URL),
};
