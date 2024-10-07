import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.POSTS_URL;

export const Api = {
  ...baseRequestApi(URL),
};
