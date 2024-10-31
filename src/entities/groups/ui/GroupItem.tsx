import type { ReactNode } from 'react';
import { GroupType } from '@/entities/groups';
import { formatNumber } from '@/shared/lib/utils.ts';
import { GroupBadge } from '@/shared/ui';

import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  IconButton,
} from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  data: GroupType;
  actionSlot?: ReactNode;
  styleContainer?: { [key: string]: string };
};

export function GroupItem({ data, actionSlot, styleContainer }: Props) {
  return (
    <Card
      className={cn(css['group-item'])}
      shadow={false}
      style={styleContainer}
    >
      <CardBody className={cn(css['group-item__content'])}>
        <div className={cn(css['group-item__header'])}>
          <GroupBadge
            urlAvatar={data?.avatar}
            baseInfo={data?.name}
            additionalInfo={`${data?.city} • ${data?.countDayPost} posts a day`}
          />

          <IconButton variant="text" className="rounded-full" ripple={false}>
            <EllipsisVerticalIcon className="h-[28px] w-[28px] text-blue-gray-400" />
          </IconButton>
        </div>

        <img
          className="w-full rounded-xl object-cover object-center"
          src={data?.imagePreview}
          alt="group image"
        />
      </CardBody>
      <CardFooter className="flex items-center content-between pt-0">
        {actionSlot}

        <div className="flex items-center -space-x-2 rtl:space-x-reverse ml-auto">
          {data.usersPreviews.map((item: string, index) => (
            <Avatar
              key={index}
              variant="circular"
              alt="user avanar"
              className="border-2 border-white h-[35px] w-[35px]"
              src={item}
            />
          ))}
          <div className="flex items-center justify-center h-[40px] min-w-[40px] text-xs font-medium text-blue-gray-400 bg-gray-200 border-2 border-white rounded-full z-2 relative">
            {formatNumber(data.countUsers)}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
