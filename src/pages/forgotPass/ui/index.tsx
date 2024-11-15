import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext, AuthPagePreviewBlock } from '@/shared/ui';
import { AuthContextType } from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';

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
      <div className={cn(css['forgot-page__right-block'])}>__right-block</div>
    </div>
  );
}
