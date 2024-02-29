import { HTMLAttributes } from 'react';

import { BellIcon } from '@heroicons/react/24/outline';
import { Badge, IconButton } from '@material-tailwind/react';

type HeaderActionsProps = {
  isEvent: boolean;
};
export function NotificationAction({
  isEvent,
  ...props
}: Partial<HeaderActionsProps> & HTMLAttributes<HTMLElement>) {
  return (
    <Badge
      color="red"
      overlap="circular"
      invisible={!isEvent}
      className="border-2 border-white"
    >
      <IconButton
        variant="text"
        size="sm"
        className="flex items-center content-center rounded-full"
        onClick={props.onClick}
      >
        <BellIcon className="h-6 w-6 text-gray-700" />
      </IconButton>
    </Badge>
  );
}
