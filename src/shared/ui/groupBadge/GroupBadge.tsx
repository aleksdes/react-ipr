import { HTMLAttributes, ReactNode } from 'react';

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

export function GroupBadge({
  isShowInfo = true,
  isBadgeVisible = false,
  isShowBaseInfo = true,
  isShowAdditionalInfo = true,
  sizeAvatar = 'h-[40px] w-[40px] min-w-[40px] min-h-[40px]',
  avatarBorder = 'border-2 border-white',
  ...props
}: Partial<UserBadgePropsType> & HTMLAttributes<HTMLDivElement>) {
  const getTitleNotAvatar = () => {
    if (!props.baseInfo) return 'NN';
    const titleInfo: string[] = props.baseInfo?.replace(/-/gi, '').split(' ');
    return (
      ((titleInfo[0] && titleInfo[0].charAt(0).toUpperCase()) || '') +
      ((titleInfo[1] && titleInfo[1].charAt(0).toUpperCase()) || '')
    );
  };

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
              className={cn(
                'rounded-full bg-blue-800 flex justify-center items-center',
                sizeAvatar,
                avatarBorder
              )}
            >
              <span className="text-white font-medium">
                {getTitleNotAvatar()}
              </span>
            </div>
          )}
        </Badge>
      </div>

      {isShowInfo && !props.additionalSlot && (
        <div className="flex flex-col">
          {isShowBaseInfo && (
            <Typography color="black" className="font-bold text-sm">
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
