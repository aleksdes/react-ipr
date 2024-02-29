import { HTMLAttributes } from 'react';
import { NotificationAction } from '@/entities/header';

import { rightSidebarType } from 'entities/rightSidebar';

// import cn from 'classnames';

type HeaderActionsProps = {
  updateSidebar: (type: rightSidebarType) => void;
};
export function HeaderActions(
  props: HeaderActionsProps & HTMLAttributes<HTMLElement>
) {
  return (
    <div className="flex items-center gap-2 mx-2">
      <NotificationAction
        isEvent={true}
        onClick={() =>
          props.updateSidebar &&
          props.updateSidebar(rightSidebarType.notification)
        }
      />
    </div>
  );
}
