import { PostType } from '@/entities/posts';
import { selectSessionUser } from '@/entities/user';
import { useAppSelector } from '@/shared/model';
import { UserBadge } from '@/shared/ui';

import { PhotoIcon, PlayIcon, StarIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

interface IProps {
  post: PostType;
}

export function PostItem({ post }: IProps) {
  const { sessionUser, profileInfo } = useAppSelector(selectSessionUser);

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
              className="rounded-lg object-cover object-center"
              src={photo}
              alt={'image_' + index}
              key={index}
            />
          ))}
        </div>

        <hr className={cn('text-blue-gray-500 mt-3 mb-3 w-[100%] mx-auto')} />

        <div className={cn(css['post__box-actions'])}>
          <Button
            size="sm"
            variant="text"
            className={cn(css['post__btn-actions'], 'text-blue-gray-500')}
          >
            <PlayIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
            Live Video
          </Button>
          <Button
            size="sm"
            variant="text"
            className={cn(css['post__btn-actions'], 'text-blue-gray-500')}
          >
            <PhotoIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
            Image/Video
          </Button>
          <Button
            size="sm"
            variant="text"
            className={cn(css['post__btn-actions'], 'text-blue-gray-500')}
          >
            <StarIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
            Activity
          </Button>
        </div>
      </div>
    </div>
  );
}
