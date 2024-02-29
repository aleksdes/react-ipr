import { HTMLAttributes, useState } from 'react';

import { Button, Chip } from '@material-tailwind/react';
import cn from 'classnames';
import {
  notificationFilters,
  NotificationFilterType,
} from 'features/notification/filter/model';

export function NotificationFilters(props: HTMLAttributes<HTMLElement>) {
  const [active, setActive] = useState('');

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
