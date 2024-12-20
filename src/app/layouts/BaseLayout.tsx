import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { selectTheme } from '@/entities/theme';
import { fetchSessionUserAction } from '@/entities/user';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { BaseLayout as BaseLayoutApp } from '@/shared/ui';
import { Announcement } from '@/widgets/announcement';
import { Header } from '@/widgets/header';
import { NavSidebar } from '@/widgets/navSidebar';
import { navSidebarSettings } from '@/widgets/navSidebar';
import { RightSidebarLayout } from '@/widgets/rightSidebar';

export function BaseLayout() {
  const dispatch = useAppDispatch();

  const { headerHeight, announcementHeight, isSidebarMini } =
    useAppSelector(selectTheme);
  const { width } = useWindowSize();
  const isDesktop = width > 1440;

  const paddingTop = headerHeight + announcementHeight + 'px';
  const paddingLeft = isDesktop
    ? (isSidebarMini
        ? navSidebarSettings.widthMini
        : navSidebarSettings.width) + 'px'
    : '0';

  useEffect(() => {
    dispatch(fetchSessionUserAction());
  }, []);

  return (
    <BaseLayoutApp
      styleContainer={{ paddingTop, paddingLeft }}
      announcementSlot={
        <Announcement>
          <span>
            An open source frontend application built with React ⚛️ and
            Feature-Sliced Design 🍰.
          </span>
        </Announcement>
      }
      headerSlot={<Header />}
      navbarSlot={<NavSidebar />}
      sidebarSlot={<RightSidebarLayout />}
    />
  );
}
