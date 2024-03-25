import { HTMLAttributes } from 'react';

import { Avatar, Badge, Typography } from '@material-tailwind/react';
import cn from 'classnames';

type UserBadgePropsType = {
  isShowInfo: boolean;
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
  sizeAvatar = 'h-[40px] w-[40px] min-w-[40px]',
  avatarBorder = 'border-2 border-white',
  ...props
}: Partial<UserBadgePropsType> & HTMLAttributes<HTMLDivElement>) {
  const getTitleNotAvatar = () => {
    if (!props.baseInfo) return 'NN';
    const titleInfo: string[] = props.baseInfo?.split(' ');
    return (
      titleInfo[0].charAt(0).toUpperCase() +
      titleInfo[1].charAt(0).toUpperCase()
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
              <span className="text-white">{getTitleNotAvatar()}</span>
            </div>
          )}
        </Badge>
      </div>

      {isShowInfo && (
        <div className="flex flex-col">
          <Typography className="font-bold text-sm">
            {props.baseInfo || ''}
          </Typography>
        </div>
      )}
    </div>
  );
}
