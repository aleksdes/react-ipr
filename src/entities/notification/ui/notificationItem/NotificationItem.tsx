import { HTMLAttributes } from 'react';
import type { NotificationType } from '@/entities/notification';
import { getDayDate } from '@/shared/lib/use';
import { UserBadge } from '@/shared/ui';

import cn from 'classnames';

type NotificationItemProps = {
  data: NotificationType;
};
export function NotificationItem({
  data,
  ...props
}: Partial<NotificationItemProps> & HTMLAttributes<HTMLElement>) {
  const user = data?.user || {};

  const dataEvent = () => {
    if (!data?.createdAt) return '--:--';
    return getDayDate(data?.createdAt);
  };

  return (
    <div
      className={cn(
        'rounded-[12px] flex justify-between',
        !data?.isRead ? 'bg-[#F8FAFC]' : '',
        props.className
      )}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <UserBadge
        className="p-5"
        urlAvatar={user?.avatar}
        baseInfo={(user?.name || '') + ' ' + (user?.middleName || '')}
        additionalInfo={data?.eventMessage}
      />
      <div className="flex flex-col items-end p-3 pr-5">
        <p className="text-[12px] w-max font-medium text-blue-gray-500">
          {dataEvent()}
        </p>
        {!data?.isRead && (
          <div className="w-[12px] h-[12px] rounded-full border-2 border-white bg-blue-500 my-auto" />
        )}
      </div>
    </div>
  );
}
