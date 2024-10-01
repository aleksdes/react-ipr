import { createElement, Ref, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { rightSidebarType } from '@/entities/rightSidebar';
import { selectTheme } from '@/entities/theme';
import { useAppSelector } from '@/shared/model';
import { NotificationDrawer } from '@/widgets/rightSidebar/ui/sidebarNotification/NotificationDrawer.tsx';
import { SocialMediaDrawer } from '@/widgets/rightSidebar/ui/sidebarSocialMedia/SocialMediaDrawer.tsx';

import cn from 'classnames';
import { sidebarByType } from 'src/widgets/rightSidebar/lib';

import css from './sidebar.module.scss';

export function RightSidebarLayout() {
  const sidebar: Ref<HTMLDivElement> = useRef(null);

  const { headerHeight, announcementHeight } = useAppSelector(selectTheme);
  const { width } = useWindowSize();
  const isDesktop = width > 1440;

  useEffect(() => {
    if (sidebar.current && isDesktop) {
      sidebar.current.style.height = `calc(100dvh - ${
        headerHeight + announcementHeight + 'px'
      })`;
      sidebar.current.style.top = headerHeight + announcementHeight + 'px';
    }
  }, [headerHeight, announcementHeight, isDesktop]);

  return (
    <>
      {isDesktop &&
        createElement(sidebarByType[rightSidebarType.socialMedia].component, {
          ref: sidebar,
          className: cn(css['sidebar-social'], 'not-scroll'),
        })}

      <SocialMediaDrawer />
      <NotificationDrawer />
    </>
  );
}
