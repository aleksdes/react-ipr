import type { NotificationFilterType } from '@/features/notification/filter/model';

export const notificationFilters: NotificationFilterType[] = [
  {
    id: 'all',
    title: 'All Notification',
    value: '',
  },
  { id: 'unread', title: 'Unread', value: 'isRead' },
];
