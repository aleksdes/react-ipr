import { Link } from 'react-router-dom';
import { navigationMap } from '@/shared/model';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Button, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function Page404() {
  return (
    <div className={cn(css['error-page'])}>
      <div className={cn(css['error-page__container-img'])}>
        <img
          className="w-full object-cover object-center"
          src="/images/404.png"
          alt="404 image"
        />
      </div>

      <div className={cn(css['error-page__container-content'])}>
        <Typography className={cn(css['error-page__sub-title'])}>
          Page not found
        </Typography>
        <Typography className={cn(css['error-page__desc'])}>
          This Page doesn`t exist or was removed!
          <br />
          We suggest you back to home.
        </Typography>

        <Link to={navigationMap.home}>
          <Button
            className={cn(
              css['error-page__btn-home'],
              'bg-blue-600 capitalize flex flex-row items-center gap-2 mt-8'
            )}
          >
            <ArrowLeftIcon className="w-[16px] h-[16px]" />
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
