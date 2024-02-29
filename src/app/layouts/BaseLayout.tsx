import { useWindowSize } from 'react-use';
import { selectTheme } from '@/entities/theme';
import { useAppSelector } from '@/shared/model';
import { BaseLayout as BaseLayoutApp } from '@/shared/ui';
import { Header } from '@/widgets/header';
import { NavSidebar } from '@/widgets/navSidebar';
import { navSidebarSettings } from '@/widgets/navSidebar';
import { RightSidebarLayout } from '@/widgets/rightSidebar';

import { Announcement } from 'widgets/announcement';

/**
 * ✅ FSD Best practice
 *
 * (1) Devide layout in two modules: dumb layout grid (shared)
 * and smart layout with widgets (this file)
 *
 * (2) Avoid cross-import using slot (render prop) pattern
 * Pass widgets as props to layout
 */
export function BaseLayout() {
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
