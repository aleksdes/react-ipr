import { ReactNode } from 'react';
import { PostType } from '@/entities/posts';
import { ProfileUserType, SessionUserType } from '@/entities/user';
import { UserBadge } from '@/shared/ui';

import cn from 'classnames';

import css from './index.module.scss';

interface IProps {
  post: PostType;
  sessionUser: SessionUserType | null;
  profileInfo: ProfileUserType | null;
  actionsSlot?: ReactNode;
}

export function PostItem({
  post,
  sessionUser,
  profileInfo,
  actionsSlot,
}: IProps) {
  return (
    <div className={cn(css['post'])}>
      <div className={cn(css['post__header'])}>
        <UserBadge
          urlAvatar={sessionUser?.avatar}
          sizeAvatar="h-[40px] w-[40px] min-w-[40px]"
          baseInfo={`${profileInfo?.middleName} ${profileInfo?.name}`}
          additionalInfo="online"
        />
      </div>
      <div className={cn(css['post__box-content'])}>
        <p className={cn(css['post__message'], 'text-blue-gray-600')}>
          {post.message}
        </p>
        <div className={cn(css['post__box-imgs'])}>
          {post.images?.map((photo, index) => (
            <img
              className="rounded-xl object-cover object-center"
              src={photo}
              alt={'image_' + index}
              key={index}
            />
          ))}
        </div>

        {!!actionsSlot && (
          <hr className={cn('text-blue-gray-500 mt-3 mb-3 w-[100%] mx-auto')} />
        )}

        {actionsSlot}
      </div>
    </div>
  );
}
