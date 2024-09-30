import { HTMLAttributes, useEffect, useState } from 'react';
import { fetchNotificationAction } from '@/entities/notification';
import { selectSidebarMediaSlice } from '@/entities/rightSidebar';
import { NotificationFilterValueType } from '@/features/notification/filter';
import {
  notificationFilters,
  NotificationFilterType,
} from '@/features/notification/filter/model';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import { Button, Chip } from '@material-tailwind/react';
import cn from 'classnames';

export function NotificationFiltersFeature(props: HTMLAttributes<HTMLElement>) {
  const dispatch = useAppDispatch();
  const { isSidebarShow } = useAppSelector(selectSidebarMediaSlice);
  const [active, setActive] = useState<NotificationFilterValueType>(null);

  useEffect(() => {
    const filters = {
      isRead_like: active ? active !== 'unRead' : active,
      _sort: 'createdAt',
      _order: 'desc',
    };

    isSidebarShow && dispatch(fetchNotificationAction({ url: '', filters }));
  }, [active, isSidebarShow]);

  return (
    <div className={cn(props.className, 'flex gap-3 flex-wrap')}>
      {notificationFilters.map((item: NotificationFilterType) => (
        <Button
          variant="text"
          key={item.id}
          onClick={() => setActive(item.value)}
          className="p-0"
        >
          <Chip
            value={item.title}
            className={cn(
              active === item.value
                ? 'bg-[#EFF6FF] text-blue-600'
                : 'bg-gray-100 text-gray-400',
              'normal-case'
            )}
          />
        </Button>
      ))}
    </div>
  );
}
