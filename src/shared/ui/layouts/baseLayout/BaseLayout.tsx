import { type ReactNode } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

import css from './layout.module.scss';

type Props = {
  navbarSlot?: ReactNode;
  headerSlot?: ReactNode;
  bottomSlot?: ReactNode;
  announcementSlot?: ReactNode;
  sidebarSlot?: ReactNode;
  styleContainer?: { [key: string]: string };
};

export function BaseLayout(props: Props) {
  return (
    <div className={css.root}>
      <div className={css.header}>
        {props.announcementSlot}

        {props.headerSlot}
      </div>

      {props.navbarSlot}

      <div style={props.styleContainer} className={css.container}>
        <div className={css['container__content']}>
          <Outlet />
          {props.bottomSlot}
        </div>
        {props.sidebarSlot}
      </div>

      <ScrollRestoration />
    </div>
  );
}
