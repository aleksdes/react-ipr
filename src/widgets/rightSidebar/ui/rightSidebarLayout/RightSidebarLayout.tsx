import { createElement, Ref, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { rightSidebarType } from '@/entities/rightSidebar';
import { NotificationDrawer } from '@/widgets/rightSidebar/ui/sidebarNotification/NotificationDrawer.tsx';

import cn from 'classnames';
import { sidebarByType } from 'src/widgets/rightSidebar/lib';

import css from './sidebar.module.scss';

export function RightSidebarLayout() {
  const sidebar: Ref<HTMLDivElement> = useRef(null);

  const { width } = useWindowSize();
  const isDesktop = width > 1440;

  return (
    <>
      {isDesktop &&
        createElement(sidebarByType[rightSidebarType.socialMedia].component, {
          ref: sidebar,
          className: cn(css['sidebar-social'], 'not-scroll'),
        })}

      <NotificationDrawer />
    </>
  );
}
