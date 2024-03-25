import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.NOTIFICATION_URL;

export const Api = {
  ...baseRequestApi(URL),
};
