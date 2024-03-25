import { createElement, Ref, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import { selectTheme } from '@/entities/theme';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { sidebarByType } from '@/widgets/rightSidebar/model';

import { Drawer, IconButton, Typography } from '@material-tailwind/react';
import cn from 'classnames';
import {
  rightSidebarType,
  selectSidebarMediaSlice,
  setSidebarShow,
} from 'entities/rightSidebar';

import css from './sidebar.module.scss';

export function RightSidebarLayout() {
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

  const closeDrawerRight = () => dispatch(setSidebarShow());

  return (
    <>
      {isDesktop &&
        createElement(sidebarByType[rightSidebarType.socialMedia].component, {
          ref: sidebar,
          className: cn(css['sidebar-social'], 'not-scroll'),
        })}

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
          <div className="sticky top-0 bg-white z-[1]">
            <div className="flex items-center justify-between p-[15px] pb-[8px]">
              <Typography variant="h6" color="blue-gray" className="mr-3">
                {sidebarByType[type].title}
              </Typography>

              <IconButton
                size="sm"
                variant="text"
                color="blue-gray"
                onClick={closeDrawerRight}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>

            <hr className="border-blue-gray-50" />
          </div>

          {createElement(sidebarByType[type].component, {})}
        </Drawer>
      </aside>
    </>
  );
}
