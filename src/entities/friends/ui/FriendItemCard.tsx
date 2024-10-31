import type { ReactNode } from 'react';
import { FriendType } from '@/entities/friends';
import { UserBadge } from '@/shared/ui';

import { Card, CardBody, CardFooter } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  data: FriendType;
  actionSlot?: ReactNode;
  settingsSlot?: ReactNode;
  styleContainer?: { [key: string]: string };
};

export function FriendItemCard({
  data,
  actionSlot,
  settingsSlot,
  styleContainer,
}: Props) {
  return (
    <Card
      className={cn(css['friend-item'])}
      shadow={false}
      style={styleContainer}
    >
      <CardBody className={cn(css['friend-item__content'])}>
        <div className={cn(css['friend-item__header'])}>
          <UserBadge
            urlAvatar={data?.avatar}
            baseInfo={`${data?.name} ${data?.middleName}`}
            additionalInfo={data?.nikName}
          />

          {settingsSlot}
        </div>
      </CardBody>
      <CardFooter className={cn(css['friend-item__footer'])}>
        {actionSlot}
      </CardFooter>
    </Card>
  );
}
