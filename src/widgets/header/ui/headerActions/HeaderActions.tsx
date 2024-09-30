import { HTMLAttributes } from 'react';
import { rightSidebarType } from '@/entities/rightSidebar';
import { NotificationDrawerFeature } from '@/features/notification/drawer';

type HeaderActionsProps = {
  updateSidebar: (type: rightSidebarType) => void;
};
export function HeaderActions(
  props: HeaderActionsProps & HTMLAttributes<HTMLElement>
) {
  return (
    <div className="flex items-center gap-2 mx-2">
      <NotificationDrawerFeature
        openDrawer={() => props.updateSidebar(rightSidebarType.notification)}
      />
    </div>
  );
}
