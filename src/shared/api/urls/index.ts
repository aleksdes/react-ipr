import { apiUserUrls, IApiUserUrls } from '@/shared/api/urls/userUrls.ts';

type ApiUrlsType = {
  NOTIFICATION_URL: string;
  USERS_URL: string;
  PHOTOS_URL: string;
  POSTS_URL: string;
} & IApiUserUrls;

export const apiUrls: ApiUrlsType = {
  NOTIFICATION_URL: '/notifications',
  USERS_URL: '/users',
  ...apiUserUrls,
  PHOTOS_URL: '/photos',
  POSTS_URL: '/posts',
};
