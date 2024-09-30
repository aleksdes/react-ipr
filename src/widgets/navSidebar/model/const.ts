import { navigationMap } from '@/shared/model';
import { navSidebarMenuItemType } from '@/widgets/navSidebar/model';

import {
  CalendarDaysIcon,
  PhotoIcon,
  PlayIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const navSidebarMenuItems: navSidebarMenuItemType[] = [
  { title: 'Friends', link: navigationMap.friends, icon: UserIcon },
  { title: 'Groups', link: '/', icon: StarIcon },
  { title: 'Videos', link: '/', icon: PlayIcon },
  { title: 'Photos', link: '/', icon: PhotoIcon },
  { title: 'Events', link: '/', icon: CalendarDaysIcon },
];

export const navSidebarSettings = {
  widthMini: 80,
  width: 250,
};
