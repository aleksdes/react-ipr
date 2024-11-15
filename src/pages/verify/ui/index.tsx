import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '@/shared/ui';
import { AuthContextType } from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';

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

  return <div className={cn(css['verify-page'])}>__right-block</div>;
}
