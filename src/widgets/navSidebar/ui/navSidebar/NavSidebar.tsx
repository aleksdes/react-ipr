import { createElement, Ref, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { animated, useSpringValue } from '@react-spring/web';
import { selectTheme } from '@/entities/theme';
import { navigationMap, useAppSelector } from '@/shared/model';
import {
  navSidebarMenuItems,
  navSidebarSettings,
} from '@/widgets/navSidebar/model';
import { NavSidebarMenuItemProfile } from '@/widgets/navSidebar/ui';

import {
  Badge,
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from '@material-tailwind/react';
import cn from 'classnames';

import css from './sidebar.module.scss';

export function NavSidebar() {
  const { headerHeight, announcementHeight, isSidebarMini } =
    useAppSelector(selectTheme);
  const sidebar: Ref<HTMLDivElement> = useRef(null);

  const { width } = useWindowSize();
  const isDesktop = width > 1440;

  useEffect(() => {
    if (sidebar.current) {
      sidebar.current.style.top = headerHeight + announcementHeight + 'px';
    }
  }, [headerHeight, announcementHeight]);

  const opacity = useSpringValue(0, {
    config: {
      duration: 100,
    },
  });

  useEffect(() => {
    setTimeout(
      () => void opacity.start(!isSidebarMini ? 1 : 0),
      !isSidebarMini ? 300 : 0
    );
  }, [isSidebarMini, opacity]);

  return (
    <Card
      ref={sidebar}
      className={cn(
        'rounded-none shadow-xl shadow-blue-gray-900/5 scroll',
        css.sidebar,
        css['sidebar__transition'],
        !isDesktop
          ? isSidebarMini
            ? 'translate-x-[-100%]'
            : 'translate-x-0'
          : 'none'
      )}
      style={{
        width: isDesktop
          ? isSidebarMini
            ? navSidebarSettings.widthMini
            : navSidebarSettings.width
          : navSidebarSettings.width,
      }}
    >
      <List className="p-[10px] min-w-min gap-0">
        <Link to={navigationMap.home}>
          <NavSidebarMenuItemProfile mini={isDesktop && isSidebarMini} />
        </Link>

        {navSidebarMenuItems.map((item, index) => (
          <Link to={item.link} key={index}>
            <ListItem
              key={item.title}
              className="text-slate-500 overflow-hidden"
            >
              <Badge
                color="red"
                invisible={!isSidebarMini || !isDesktop}
                className="border-2 border-white"
              >
                <ListItemPrefix
                  className={cn(
                    'pl-[6px]',
                    isSidebarMini && isDesktop ? 'mr-0' : ''
                  )}
                >
                  {createElement(item.icon, { className: 'h-5 w-5' })}
                </ListItemPrefix>
              </Badge>

              {(!isSidebarMini || !isDesktop) && (
                <animated.div
                  style={isDesktop ? { opacity } : {}}
                  className={cn('flex w-full')}
                >
                  {item.title}
                  <ListItemSuffix>
                    <Chip
                      value="14"
                      size="sm"
                      variant="filled"
                      color="red"
                      className="h-[20px] rounded-full text-[10px] leading-none text-white"
                    />
                  </ListItemSuffix>
                </animated.div>
              )}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
