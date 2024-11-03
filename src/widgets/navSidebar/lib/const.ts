import { navigationMap } from '@/shared/model';

import {
  PhotoIcon,
  StarIcon,
  UserIcon,
  // CalendarDaysIcon,
  // PlayIcon,
} from '@heroicons/react/24/outline';

import { type NavSidebarMenuItemType } from '../model';

export const navSidebarMenuItems: NavSidebarMenuItemType[] = [
  { title: 'Friends', link: navigationMap.friends, icon: UserIcon },
  { title: 'Groups', link: navigationMap.groups, icon: StarIcon },
  { title: 'Photos', link: navigationMap.photos, icon: PhotoIcon },
  // TODO: требует реализации в будущем
  // { title: 'Videos', link: '/', icon: PlayIcon },
  // { title: 'Events', link: '/', icon: CalendarDaysIcon },
];

export const navSidebarSettings = {
  widthMini: 80,
  width: 250,
};
