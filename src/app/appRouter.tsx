import { createBrowserRouter } from 'react-router-dom';
import { navigationMap } from '@/shared/model';

import { BaseLayout } from './layouts';

export const appRouter = () =>
  createBrowserRouter([
    {
      element: <BaseLayout />,
      errorElement: <div>error baseLayout</div>,
      children: [
        {
          path: navigationMap.home,
          element: (
            <div>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
              <p>home data</p>
            </div>
          ),
        },
      ],
    },
    // {
    //   element: authLayout,
    //   errorElement: <div>error authLayout</div>,
    //   children: [
    //     {
    //       path: navigationMap.login,
    //       element: <p>login</p>,
    //     },
    //     {
    //       path: navigationMap.register,
    //       element: <p>register</p>,
    //     },
    //     {
    //       path: navigationMap.forgotPassword,
    //       element: <p>forgot-password</p>,
    //     },
    //     {
    //       path: navigationMap.resetPassword,
    //       element: <p>reset-password</p>,
    //     },
    //   ],
    // },
  ]);
