export interface INavigationMap {
  error404: string;
  home: string;
  login: string;
  register: string;
  forgotPassword: string;
  resetPassword: string;
  friends: string;
}

export const navigationMap: INavigationMap = {
  error404: '/not-found',
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  friends: '/friends',
};
