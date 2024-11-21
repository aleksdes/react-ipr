import { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ForgotFormFeature } from '@/features/auth/forgot-password';
import { navigationMap } from '@/shared/model';
import { AuthContext, AuthPagePreviewBlock } from '@/shared/ui';
import { AuthContextType } from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function ForgotPasswordPage() {
  const dataContext: AuthContextType = useContext(AuthContext);
  const locationData = useLoaderData();

  useEffect(() => {
    dataContext?.setRouteData &&
      locationData &&
      dataContext?.setRouteData(locationData);
  }, []);

  return (
    <div className={cn(css['forgot-page'])}>
      <AuthPagePreviewBlock className={cn(css['forgot-page__left-block'])} />

      <div className={cn(css['forgot-page__right-block'])}>
        <div>
          <Typography className="text-[22px] md:text-2xl font-bold mb-2">
            Reset your password
          </Typography>

          <Typography className="text-[14px] text-blue-gray-500 mb-5">
            Enter the email address associated with your account and we will
            send you a link to reset your password.
          </Typography>

          <ForgotFormFeature />

          <div className="flex text-[14px] text-blue-gray-500 justify-center w-full mt-6">
            <Typography className="flex gap-2">
              <Link
                to={navigationMap.login}
                className="text-blue-600 font-semibold"
              >
                Back to Sign In
              </Link>
            </Typography>
          </div>
        </div>

        <div className="flex text-[14px] text-blue-gray-500 justify-center w-full py-5">
          <Typography className="flex gap-2">
            Don’t have an account?
            <Link
              to={navigationMap.register}
              className="text-blue-600 font-semibold"
            >
              Sign Up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
