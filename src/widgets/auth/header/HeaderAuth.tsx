import { useContext } from 'react';
import { useWindowSize } from 'react-use';
import {
  AuthContext,
  AuthContextType,
} from '@/shared/ui/layouts/authLayout/AuthProvider.tsx';

import cn from 'classnames';

import css from './index.module.scss';

export function HeaderAuth() {
  const dataContext: AuthContextType = useContext(AuthContext);
  const routeData = (dataContext && dataContext.routeData) || null;
  const { width } = useWindowSize();
  const isDesktop = width > 768;

  return (
    <div className={cn(css['header-auth'], 'w-100')}>
      <div className={cn(css['header-auth__logo-box'])}>
        {routeData?.isMonoLogo || !isDesktop ? (
          <img
            className="w-full object-cover object-center"
            src="/logo-full-white.svg"
            alt="Logo image"
          />
        ) : (
          <img
            className="w-full object-cover object-center"
            src="/logo-full.svg"
            alt="Logo image"
          />
        )}
      </div>
    </div>
  );
}
