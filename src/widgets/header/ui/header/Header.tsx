import { Ref, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import { rightSidebarType, sidebarMediaActions } from '@/entities/rightSidebar';
import { themeActions } from '@/entities/theme';
import { useAppDispatch } from '@/shared/model';
import { Logo } from '@/shared/ui';
import { SidebarBurger } from '@/shared/ui';
import { HeaderProfileMenu } from '@/widgets/header/ui';
import { HeaderActions } from '@/widgets/header/ui';

import { Navbar } from '@material-tailwind/react';
import cn from 'classnames';
export function Header() {
  const dispatch = useAppDispatch();
  const header: Ref<HTMLDivElement> = useRef(null);
  const { width } = useWindowSize();
  const isDesktop = width > 1440;
  const isTablet = width > 768;

  useEffect(() => {
    const handleResize = () => {
      if (header.current) {
        const height: number = header.current.getBoundingClientRect().height;
        dispatch(themeActions.updateHeaderHeight(height));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const setSideBar = (type: rightSidebarType) => {
    dispatch(sidebarMediaActions.setSidebarType(type));
    dispatch(sidebarMediaActions.setSidebarShow());
  };

  return (
    <Navbar ref={header} fullWidth className={cn('w-full px-[10px] py-[10px]')}>
      <div className="relative mx-auto flex items-center justify-between">
        <div
          className={cn(
            'flex gap-3 items-center',
            isDesktop ? 'flex-row' : 'flex-row-reverse'
          )}
        >
          <div
            className="flex flex-row items-center"
            onClick={() => dispatch(themeActions.setSidebarMini())}
          >
            <SidebarBurger />
            {!isDesktop && (
              <span className="text-[14px] font-medium text-blue-gray-600 ml-1">
                Menu
              </span>
            )}
          </div>

          <Link to={'/'} className="flex items-center">
            <Logo size={isDesktop ? 30 : 25} />
          </Link>
        </div>

        <div className="flex items-center">
          {!isDesktop && (
            <SidebarBurger
              onClick={() => setSideBar(rightSidebarType.socialMedia)}
            />
          )}

          {isTablet && (
            <HeaderActions
              updateSidebar={(event: rightSidebarType) => setSideBar(event)}
            />
          )}

          <HeaderProfileMenu />
        </div>
      </div>
    </Navbar>
  );
}
