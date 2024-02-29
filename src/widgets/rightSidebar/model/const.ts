import { rightSidebarType } from 'entities/rightSidebar';

import { SidebarNotification, SidebarSocialMedia } from '../ui';

export const sidebarByType = {
  [rightSidebarType.socialMedia]: {
    component: SidebarSocialMedia,
    title: '',
  },
  [rightSidebarType.notification]: {
    component: SidebarNotification,
    title: 'Notification',
  },
};
