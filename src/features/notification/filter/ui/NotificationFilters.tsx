import { HTMLAttributes, useEffect, useState } from 'react';
import { NotificationFilterValueType } from '@/features/notification/filter/model/types.ts';
import { useAppDispatch } from '@/shared/model';

import { Button, Chip } from '@material-tailwind/react';
import cn from 'classnames';
import { fetchNotificationAction } from 'entities/notification';
import {
  notificationFilters,
  NotificationFilterType,
} from 'features/notification/filter/model';

export function NotificationFilters(props: HTMLAttributes<HTMLElement>) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<NotificationFilterValueType>(null);

  useEffect(() => {
    const filters = { isRead_like: active ? active !== 'unRead' : active };

    dispatch(fetchNotificationAction({ url: '', filters }));
  }, [active]);

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
