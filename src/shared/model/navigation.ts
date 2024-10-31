export interface INavigationMap {
  error404: string;
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
  error404: '/not-found',
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  friends: '/friends',
  groups: '/groups',
  photos: '/photos',
  albums: '/photos/albums',
  album: '/photos/album',
};
