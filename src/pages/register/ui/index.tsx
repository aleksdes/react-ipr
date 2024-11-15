import { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { RegisterFormFeature } from '@/features/auth/register';
import { navigationMap } from '@/shared/model';
import { AuthContext, AuthPagePreviewBlock } from '@/shared/ui';
import { AuthContextType } from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';
import { Icon } from '@/shared/ui/theme/icons';

import { Button, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function RegisterPage() {
  const dataContext: AuthContextType = useContext(AuthContext);
  const locationData = useLoaderData();

  useEffect(() => {
    dataContext?.setRouteData &&
      locationData &&
      dataContext?.setRouteData(locationData);
  }, []);

  return (
    <div className={cn(css['register-page'])}>
      <AuthPagePreviewBlock className={cn(css['register-page__left-block'])} />

      <div className={cn(css['register-page__right-block'])}>
        <Typography className="text-[22px] md:text-2xl font-bold mb-5">
          Sign Up for an Account
        </Typography>

        <RegisterFormFeature />

        <div className="flex flex-col w-full my-6">
          <div className="flex flex-row items-center justify-between w-full mb-5">
            <hr className="flex border-blue-gray-100 w-[100%] h-[2px]" />
            <Typography className="text-[12px] w-[100%] mx-3 text-blue-gray-400">
              Or sign up with
            </Typography>
            <hr className="flex border-blue-gray-100 w-[100%] h-[2px]" />
          </div>

          <div className={cn(css['auth-social'])}>
            <Button
              variant="outlined"
              className={cn(css['auth-social__btn-social'])}
            >
              <Icon name="google" size={20} />
              Google
            </Button>

            <Button
              variant="outlined"
              className={cn(css['auth-social__btn-social'])}
            >
              <Icon name="facebook" size={20} />
              Facebook
            </Button>
          </div>
        </div>

        <div className="flex text-[14px] text-blue-gray-500 justify-center w-full">
          <Typography className="flex gap-2">
            Already have an account?
            <Link
              to={navigationMap.login}
              className="text-blue-600 font-semibold"
            >
              Log In
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
