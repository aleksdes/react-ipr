import type { NotificationType } from '@/entities/notification';
import { NotificationItem, selectNotification } from '@/entities/notification';
import { NotificationFilters } from '@/features/notification/filter';
import { useReadNotification } from '@/features/notification/read';
import { useAppSelector } from '@/shared/model';

import cn from 'classnames';

import css from './style.module.scss';

export function SidebarNotification() {
  const { items } = useAppSelector(selectNotification);
  const { setTimer, clearTimer } = useReadNotification();

  return (
    <div className={cn(css.notification)}>
      <NotificationFilters className="mb-4" />

      <div className="grid gap-2">
        {(!!items.length &&
          items.map((item: NotificationType) => (
            <NotificationItem
              key={item.id}
              data={item}
              className="cursor-pointer hover:bg-gray-50"
              onMouseEnter={() => setTimer(item)}
              onMouseLeave={() => clearTimer()}
            />
          ))) || (
          <p className={cn('text-center text-[14px] text-gray-500 ')}>
            No unread messages
          </p>
        )}
      </div>
    </div>
  );
}
