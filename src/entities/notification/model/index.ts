export { notificationSagaWatcher } from '@/entities/notification/model/saga.ts';
export { notificationsActions } from '@/entities/notification/model/slice.ts';
export type { NotificationType } from '@/entities/notification/model/type.ts';
export {
  selectNotification,
  fetchNotificationAction,
  updateNotificationAction,
  fetchNotificationActionCounter,
} from '@/entities/notification/model/selectors.ts';
