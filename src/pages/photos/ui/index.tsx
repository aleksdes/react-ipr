import { NavLink, Outlet } from 'react-router-dom';
import { navigationMap } from '@/shared/model';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { IconButton } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function PhotosPage() {
  const navItems = [
    {
      label: 'Your Photos',
      link: navigationMap.photos,
    },
    {
      label: 'Albums',
      link: navigationMap.albums,
    },
  ];

  return (
    <div className={cn(css['photos-page'])}>
      <div className={cn(css['photos-card'])}>
        <div className={cn(css['photos-card__header'])}>
          <p className={'base-title'}>Your Photos</p>

          <div className={cn(css['photos-card__box-actions'])}>
            <IconButton
              variant="text"
              className={cn(css['photos-card__settings-btn'], 'rounded-full')}
              ripple={false}
            >
              <EllipsisHorizontalIcon className="h-[28px] w-[28px] text-blue-gray-400" />
            </IconButton>
          </div>
        </div>

        <hr className={cn('text-blue-gray-500 w-[100%] mx-auto')} />

        <div className={cn(css['photos-card__box-content'])}>
          <div className={cn(css['photos-card__container-nav'])}>
            {navItems.map((item, index) => (
              <NavLink
                to={item.link}
                end
                key={index}
                className={({ isActive }) =>
                  cn(
                    css['photos-card__nav-item'],
                    isActive ? css['photos-card__nav-item--active'] : ''
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
