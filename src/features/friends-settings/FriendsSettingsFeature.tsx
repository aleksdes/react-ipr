import { useState } from 'react';
import { deleteFriendAction, FriendType } from '@/entities/friends';
import { useAppDispatch } from '@/shared/model';

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';

type Props = {
  userData: FriendType;
  callbackDelete: () => void;
};

export function FriendsSettingsFeature({ userData, callbackDelete }: Props) {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  function deleteUser() {
    dispatch(deleteFriendAction({ url: userData.id }));
    callbackDelete();
    closeMenu();
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="left-start">
      <MenuHandler>
        <IconButton variant="text" className="rounded-full" ripple={false}>
          <EllipsisVerticalIcon className="h-[28px] w-[28px] text-blue-gray-400" />
        </IconButton>
      </MenuHandler>

      <MenuList className="p-1">
        <MenuItem
          onClick={() => deleteUser()}
          className={`flex items-center gap-2 rounded`}
        >
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="inherit"
          >
            Remove from list
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
