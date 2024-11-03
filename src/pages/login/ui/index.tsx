import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '@/shared/ui';
import { AuthContextType } from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';

import cn from 'classnames';

import css from './index.module.scss';

export function LoginPage() {
  const dataContext: AuthContextType = useContext(AuthContext);
  const locationData = useLoaderData();

  useEffect(() => {
    dataContext?.setRouteData &&
      locationData &&
      dataContext?.setRouteData(locationData);
  }, []);

  return (
    <div className={cn(css['login-page'])}>
      <div className={cn(css['login-page__left-block'])}>
        <img
          className="w-full object-cover object-center"
          src="/images/auth-img-1.svg"
          alt="Auth image"
        />
      </div>
      <div className={cn(css['login-page__right-block'])}>__right-block</div>
    </div>
  );
}
