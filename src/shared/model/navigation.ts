export interface INavigationMap {
  home: string;
  login: string;
  register: string;
  forgotPassword: string;
  resetPassword: string;
  friends: string;
  groups: string;
  photos: string;
  albums: string;
  album: string;
}

export const navigationMap: INavigationMap = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  forgotPassword: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',
  friends: '/friends',
  groups: '/groups',
  photos: '/photos',
  albums: '/photos/albums',
  album: '/photos/album',
};
