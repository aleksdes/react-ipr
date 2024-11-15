import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@/pages/404/index.ts';
import { AlbumPage } from '@/pages/album/index.ts';
import { ForgotPasswordPage } from '@/pages/forgotPass';
import { FriendsPage } from '@/pages/friends/index.ts';
import { GroupsPage } from '@/pages/groups/index.ts';
import { LoginPage } from '@/pages/login';
import { PhotosPage } from '@/pages/photos/index.ts';
import { ProfilePage } from '@/pages/profile/index.ts';
import { RegisterPage } from '@/pages/register';
import { VerifyPage } from '@/pages/verify';
import { navigationMap } from '@/shared/model';
import { AuthProvider } from '@/shared/ui';
import { AlbumsPageTab } from '@/widgets/photos/albumsPageTab';
import { PhotosPageTab } from '@/widgets/photos/photosPageTab';

import { AuthLayout, BaseLayout } from './layouts';

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: navigationMap.home,
          element: <ProfilePage />,
        },
        {
          path: navigationMap.friends,
          element: <FriendsPage />,
        },
        {
          path: navigationMap.groups,
          element: <GroupsPage />,
        },
        {
          path: navigationMap.photos,
          element: <PhotosPage />,
          children: [
            {
              path: '',
              element: <PhotosPageTab />,
            },
            {
              path: navigationMap.albums,
              element: <AlbumsPageTab />,
            },
          ],
        },
        {
          path: navigationMap.albums + '/:id',
          element: <AlbumPage />,
        },
      ],
    },
    {
      element: (
        <AuthProvider>
          <AuthLayout />
        </AuthProvider>
      ),
      children: [
        {
          path: navigationMap.login,
          element: <LoginPage />,
          loader: () => {
            return {
              isMonoLogo: true,
            };
          },
        },
        {
          path: navigationMap.register,
          element: <RegisterPage />,
          loader: () => {
            return {
              isMonoLogo: true,
            };
          },
        },
        {
          path: navigationMap.forgotPassword,
          element: <ForgotPasswordPage />,
          loader: () => {
            return {
              isMonoLogo: true,
            };
          },
        },
        {
          path: navigationMap.verify,
          element: <VerifyPage />,
        },
      ],
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ]);
