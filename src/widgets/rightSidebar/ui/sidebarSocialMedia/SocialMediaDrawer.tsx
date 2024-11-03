import { createElement, Ref, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useWindowSize } from 'react-use';
import {
  rightSidebarType,
  selectSidebarMediaSlice,
  sidebarMediaActions,
} from '@/entities/rightSidebar';
import { selectTheme } from '@/entities/theme';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { RightSidebarHeader } from '@/shared/ui/rightSidebarHeader/RightSidebarHeader.tsx';

import { Drawer } from '@material-tailwind/react';
import cn from 'classnames';
import { sidebarByType } from 'src/widgets/rightSidebar/lib';

import css from './socailMediaDrawer.module.scss';

export function SocialMediaDrawer() {
  const { type, isSidebarShow } = useAppSelector(selectSidebarMediaSlice);
  const { headerHeight, announcementHeight } = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const sidebar: Ref<HTMLDivElement> = useRef(null);

  const drawer: Ref<HTMLDivElement> = useRef(null);

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

  useEffect(() => {
    isSidebarShow
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isSidebarShow]);

  const closeDrawerRight = () => dispatch(sidebarMediaActions.setSidebarShow());

  return (
    <>
      {type === rightSidebarType.socialMedia &&
        createPortal(
          <aside>
            <Drawer
              ref={drawer}
              placement="right"
              open={isSidebarShow}
              onClose={closeDrawerRight}
              className={cn('p-0 overflow-y-auto', css['sidebar-drawer'])}
              overlayProps={{
                className: 'fixed',
              }}
              size={500}
            >
              <RightSidebarHeader
                title={sidebarByType[type].title}
                onClose={closeDrawerRight}
              />

              {createElement(sidebarByType[type].component, {})}
            </Drawer>
          </aside>,
          document.body
        )}
    </>
  );
}
