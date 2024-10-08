import { type ReactNode, useEffect } from 'react';
import {
  fetchNotificationActionCounter,
  selectNotification,
} from '@/entities/notification';
import { rightSidebarType, setSidebarShow } from '@/entities/rightSidebar';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import { BellIcon } from '@heroicons/react/24/outline';
import { Badge, IconButton } from '@material-tailwind/react';

type Props = {
  children?: (props: { counter: number; updateOpen: () => void }) => ReactNode;
  customActivator?: boolean;
  openDrawer: (type: rightSidebarType) => void;
};

export function NotificationDrawerFeature({
  children,
  customActivator = false,
  openDrawer,
}: Props) {
  const dispatch = useAppDispatch();
  const { counter, items } = useAppSelector(selectNotification);

  useEffect(() => {
    const filters = { isRead: false };

    dispatch(fetchNotificationActionCounter({ url: '', filters }));
  }, [items]);

  const closeDrawerRight = () => dispatch(setSidebarShow());

  return (
    <>
      {customActivator ? (
        children &&
        children({ counter, updateOpen: closeDrawerRight as () => void })
      ) : (
        <Badge
          color="red"
          overlap="circular"
          invisible={!counter}
          className="border-2 border-white"
        >
          <IconButton
            variant="text"
            size="sm"
            className="flex items-center content-center rounded-full"
            onClick={() => openDrawer(rightSidebarType.notification)}
          >
            <BellIcon className="h-6 w-6 text-blue-gray-600" />
          </IconButton>
        </Badge>
      )}
    </>
  );
}
