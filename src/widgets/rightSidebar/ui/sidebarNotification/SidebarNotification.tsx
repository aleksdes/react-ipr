import { useEffect } from 'react';
import {
  fetchNotificationAction,
  NotificationItem,
  selectNotification,
} from '@/entities/notification';
import { NotificationFilters } from '@/features/notification/filter';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import cn from 'classnames';
import type { NotificationType } from 'entities/notification';

import css from './style.module.scss';

export function SidebarNotification() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectNotification);

  useEffect(() => {
    dispatch(fetchNotificationAction());
  }, []);

  return (
    <div className={cn(css.notification)}>
      <NotificationFilters className="mb-4" />

      <div className="grid gap-2">
        {!!items.length &&
          items.map((item: NotificationType) => (
            <NotificationItem
              key={item.id}
              data={item}
              className="cursor-pointer hover:bg-gray-50"
            />
          ))}
      </div>
    </div>
  );
}
