import {
  NotificationType,
  updateNotificationAction,
} from '@/entities/notification';
import { useAppDispatch } from '@/shared/model';

export function useReadNotification() {
  const dispatch = useAppDispatch();

  let timer: NodeJS.Timeout | null = null;

  const readNotification = (id: string) => {
    dispatch(
      updateNotificationAction({
        payloadData: {
          isRead: true,
        },
        url: `/${id}`,
      })
    );
  };

  const clearTimer = () => {
    if (timer !== null) {
      clearTimeout(timer);
    }
  };

  const setTimer = (item: NotificationType, interval = 1000) => {
    clearTimer();
    if (item.isRead) return;
    timer = setTimeout(() => {
      readNotification(item.id);
    }, interval);
  };

  return {
    setTimer,
    clearTimer,
  };
}
