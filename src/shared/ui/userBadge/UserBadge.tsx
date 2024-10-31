import { HTMLAttributes, ReactNode } from 'react';

import { UserIcon } from '@heroicons/react/24/solid';
import { Avatar, Badge, Typography } from '@material-tailwind/react';
import cn from 'classnames';

type UserBadgePropsType = {
  additionalSlot: ReactNode;
  isShowInfo: boolean;
  isShowBaseInfo: boolean;
  isShowAdditionalInfo: boolean;
  sizeAvatar: string | number;
  baseInfo: string;
  additionalInfo: string;
  urlAvatar: string;
  isBadgeVisible: boolean;
  avatarBorder: string;
};

export function UserBadge({
  isShowInfo = true,
  isBadgeVisible = false,
  sizeAvatar = 'h-[40px] w-[40px] min-w-[40px] min-h-[40px]',
  isShowBaseInfo = true,
  isShowAdditionalInfo = true,
  avatarBorder = 'border-2 border-white',
  ...props
}: Partial<UserBadgePropsType> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(props?.className, 'flex flex-row items-center')}
      style={props?.style}
    >
      <div
        className={cn(
          isShowInfo ? 'mr-3' : 'mr-0',
          'flex content-center flex-wrap'
        )}
      >
        <Badge
          color="red"
          invisible={!isBadgeVisible}
          overlap="circular"
          className="border-2 border-white"
        >
          {props.urlAvatar ? (
            <Avatar
              src={props.urlAvatar}
              alt="avatar"
              className={cn(avatarBorder, sizeAvatar)}
            />
          ) : (
            <div
              className={cn('rounded-full bg-white', sizeAvatar, avatarBorder)}
            >
              <UserIcon className="text-blue-gray-300" />
            </div>
          )}
        </Badge>
      </div>

      {isShowInfo && !props.additionalSlot && (
        <div className="flex flex-col">
          {isShowBaseInfo && (
            <Typography className="font-bold text-sm">
              {props.baseInfo || ''}
            </Typography>
          )}
          {isShowAdditionalInfo && (
            <Typography color="gray" className="text-xs font-normal">
              {props.additionalInfo || ''}
            </Typography>
          )}
        </div>
      )}

      {isShowInfo && props.additionalSlot}
    </div>
  );
}
