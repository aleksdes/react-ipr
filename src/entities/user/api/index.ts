import { apiUrls, baseRequestApi } from '@/shared/api';

const URL = apiUrls.USER_URL;
const URL_PROFILE_INFO = apiUrls.USER_PROFILE_URL;

export const Api = {
  ...baseRequestApi(URL),
};

export const ApiProfile = {
  ...baseRequestApi(URL_PROFILE_INFO),
};
