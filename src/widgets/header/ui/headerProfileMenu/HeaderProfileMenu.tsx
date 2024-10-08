import React from 'react';
import { selectSessionUser } from '@/entities/user';
import { useAppSelector } from '@/shared/model';
import { UserBadge } from '@/shared/ui';
import { profileMenuItems } from '@/widgets/header/model';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';

export function HeaderProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { sessionUser } = useAppSelector(selectSessionUser);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <UserBadge
            isShowInfo={false}
            urlAvatar={sessionUser?.avatar}
            sizeAvatar="h-[45px] w-[45px] min-w-[45px]"
          />

          <ChevronDownIcon
            strokeWidth={3}
            className={`h-4 w-4 text-blue-gray-500 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
