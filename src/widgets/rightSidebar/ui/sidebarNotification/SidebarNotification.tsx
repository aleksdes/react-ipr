import { NotificationItem } from '@/entities/notification';
import { NotificationFilters } from '@/features/notification/filter';

import cn from 'classnames';
import type { NotificationType } from 'entities/notification';

import css from './style.module.scss';
export function SidebarNotification() {
  const notification: NotificationType[] = [
    {
      id: 1,
      user: {
        name: 'Bessie',
        middleName: 'Cooper',
        avatar: 'https://docs.material-tailwind.com/img/face-5.jpg',
      },
      isRead: false,
      createdAt: 1709105560,
      eventMessage: 'Start following you',
    },
    {
      id: 2,
      user: {
        name: 'Bessie',
        middleName: 'Cooper',
        avatar: 'https://docs.material-tailwind.com/img/face-5.jpg',
      },
      isRead: true,
      createdAt: 1709105560,
      eventMessage: 'Joined the UI Official group',
    },
  ];
  return (
    <div className={cn(css.notification)}>
      <NotificationFilters className="mb-4" />

      <div className="grid gap-2">
        {notification.length &&
          notification.map((item: NotificationType) => (
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
