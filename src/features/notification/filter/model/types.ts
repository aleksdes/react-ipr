export type NotificationFilterValueType = null | 'unRead';

export type NotificationFilterType = {
  id: string | number;
  title: string;
  value: NotificationFilterValueType;
};
