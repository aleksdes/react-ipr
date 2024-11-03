import { type ReactNode, Ref, useEffect, useRef } from 'react';
import { themeActions } from '@/entities/theme';
import { useAppDispatch } from '@/shared/model';

import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  children: ReactNode;
};

export function Announcement({ children }: Props) {
  const dispatch = useAppDispatch();
  const announcement: Ref<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (announcement.current) {
        const height: number =
          announcement.current.getBoundingClientRect().height;
        dispatch(themeActions.updateAnnouncementHeight(height));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div
      ref={announcement}
      className={cn(css.root, 'text-[10px] lg:text-sm text-bold')}
    >
      {children}
    </div>
  );
}
