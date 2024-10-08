import { PostType } from '@/entities/posts';
import { selectSessionUser } from '@/entities/user';
import { PostChangeLikeFeature } from '@/features/post-change-like';
import { formatNumber } from '@/shared/lib/utils';
import { useAppSelector } from '@/shared/model';
import { UserBadge } from '@/shared/ui';

import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
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
              className="rounded-xl object-cover object-center"
              src={photo}
              alt={'image_' + index}
              key={index}
            />
          ))}
        </div>

        <hr className={cn('text-blue-gray-500 mt-3 mb-3 w-[100%] mx-auto')} />

        <div className={cn(css['post__box-actions'])}>
          <PostChangeLikeFeature post={post}>
            {(props) => (
              <Button
                size="sm"
                variant="text"
                className={cn(
                  css['post__btn-actions'],
                  post.isLicked ? 'text-blue-500' : 'text-blue-gray-500'
                )}
                onClick={props.onClick}
              >
                {post.isLicked ? (
                  <HeartIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
                ) : (
                  <HeartIconOutline
                    className={'min-h-[20px] min-w-[20px] w-[20px]'}
                  />
                )}
                {formatNumber(post?.likes || 0)} Likes
              </Button>
            )}
          </PostChangeLikeFeature>

          <div
            className={cn(
              css['post__btn-actions'],
              'text-blue-gray-500',
              'font-sans '
            )}
          >
            <ChatBubbleOvalLeftEllipsisIcon
              className={'min-h-[20px] min-w-[20px] w-[20px]'}
            />
            {formatNumber(post?.comments || 0)} Comments
          </div>

          <Button
            size="sm"
            variant="text"
            className={cn(css['post__btn-actions'], 'text-blue-gray-500')}
          >
            <ShareIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
            {formatNumber(post?.share || 0)} Share
          </Button>
        </div>
      </div>
    </div>
  );
}
