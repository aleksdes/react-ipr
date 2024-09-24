import { HTMLAttributes, useEffect } from 'react';
import { NotificationAction } from '@/entities/header';
import {
  fetchNotificationActionCounter,
  selectNotification,
} from '@/entities/notification';
import { rightSidebarType } from '@/entities/rightSidebar';
import { useAppDispatch, useAppSelector } from '@/shared/model';

// import cn from 'classnames';

type HeaderActionsProps = {
  updateSidebar: (type: rightSidebarType) => void;
};
export function HeaderActions(
  props: HeaderActionsProps & HTMLAttributes<HTMLElement>
) {
  const { counter, items } = useAppSelector(selectNotification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const filters = { isRead: false };

    dispatch(fetchNotificationActionCounter({ url: '', filters }));
  }, [items]);

  return (
    <div className="flex items-center gap-2 mx-2">
      <NotificationAction
        isEvent={!!counter}
        onClick={() =>
          props.updateSidebar &&
          props.updateSidebar(rightSidebarType.notification)
        }
      />
    </div>
  );
}
