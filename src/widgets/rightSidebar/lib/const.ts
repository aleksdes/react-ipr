import { rightSidebarType } from '@/entities/rightSidebar';

import { SidebarNotificationList, SidebarSocialMedia } from '../ui';

export const sidebarByType = {
  [rightSidebarType.socialMedia]: {
    component: SidebarSocialMedia,
    title: '',
  },
  [rightSidebarType.notification]: {
    component: SidebarNotificationList,
    title: 'Notification',
  },
};
