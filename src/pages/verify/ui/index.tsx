import { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { navigationMap } from '@/shared/model';
import { AuthContext } from '@/shared/ui';
import { AuthContextType } from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';

import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function VerifyPage() {
  const dataContext: AuthContextType = useContext(AuthContext);
  const locationData = useLoaderData();

  useEffect(() => {
    dataContext?.setRouteData &&
      locationData &&
      dataContext?.setRouteData(locationData);
  }, []);

  return (
    <div className={cn(css['verify-page'])}>
      <Card className={cn(css['verify-page__card'])}>
        <CardBody className={cn(css['verify-page__card-body'])}>
          <img
            src="/images/auth-verify-img.svg"
            alt="verify-img"
            className="mb-7"
          />
          <Typography className="text-[22px] md:text-2xl font-bold mb-2 text-black">
            Verify your Email
          </Typography>
          <Typography className="text-[14px] text-blue-gray-500 mb-6">
            Thank you, check your email for instructions to reset your password
          </Typography>

          <Button
            className={cn(
              css['login-form__btn-send'],
              'bg-blue-600 capitalize w-full text-[16px]'
            )}
          >
            Skip Now
          </Button>

          <div className="flex text-[14px] text-blue-gray-500 justify-center w-full pt-8">
            <Typography className="flex gap-2">
              Don’t receive an email?
              <Link
                to={navigationMap.forgotPassword}
                className="text-blue-600 font-semibold"
              >
                Resend
              </Link>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
