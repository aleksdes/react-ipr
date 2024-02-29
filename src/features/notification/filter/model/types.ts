export type NotificationFilterValueType = '' | 'isRead';

export type NotificationFilterType = {
  id: string | number;
  title: string;
  value: NotificationFilterValueType;
};
