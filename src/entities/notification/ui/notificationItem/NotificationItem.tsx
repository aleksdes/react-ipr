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
    const startToday = dayjs().startOf('day').unix();
    const startYesterday = dayjs().subtract(1, 'day').startOf('day').unix();
    const dataItem =
      typeof data.createdAt === 'string'
        ? dayjs(data.createdAt).unix()
        : data.createdAt;

    if (dataItem >= startToday) return dayjs.unix(dataItem).format('HH:mm');

    if (dataItem >= startYesterday && dataItem < startToday)
      return 'yesterday ' + dayjs.unix(dataItem).format('HH:mm');

    return dayjs.unix(dataItem).format('DD-MM HH:mm');
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
        <p className="text-[12px] w-max font-medium text-gray-500">
          {dataEvent()}
        </p>
        {!data?.isRead && (
          <div className="w-[12px] h-[12px] rounded-full border-2 border-white bg-blue-500 my-auto" />
        )}
      </div>
    </div>
  );
}
