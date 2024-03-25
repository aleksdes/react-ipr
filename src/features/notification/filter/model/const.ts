import type { NotificationFilterType } from '@/features/notification/filter/model';

export const notificationFilters: NotificationFilterType[] = [
  {
    id: 'all',
    title: 'All Notification',
    value: null,
  },
  { id: 'unread', title: 'Unread', value: 'unRead' },
];
