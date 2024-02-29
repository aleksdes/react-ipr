import { HTMLAttributes } from 'react';
import type { NotificationType } from '@/entities/notification';
import { UserBadge } from '@/shared/ui';

import cn from 'classnames';
import dayjs from 'dayjs';

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
    if (typeof data.createdAt === 'string')
      return dayjs(data.createdAt).format('HH:mm');
    return dayjs.unix(data.createdAt).format('HH:mm');
  };

  return (
    <div
      className={cn(
        'rounded-[12px] flex justify-between',
        !data?.isRead ? 'bg-[#F8FAFC]' : '',
        props.className
      )}
    >
      <UserBadge
        className="p-5"
        urlAvatar={user?.avatar}
        baseInfo={(user?.name || '') + ' ' + (user?.middleName || '')}
        additionalInfo={data?.eventMessage}
      />
      <div className="flex flex-col items-end p-3 pr-5">
        <p className="text-[12px] font-medium text-gray-500">{dataEvent()}</p>
        {!data?.isRead && (
          <div className="w-[12px] h-[12px] rounded-full border-2 border-white bg-blue-500 my-auto" />
        )}
      </div>
    </div>
  );
}
