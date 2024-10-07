import { selectSessionUser } from '@/entities/user';
import { useAppSelector } from '@/shared/model';
import { UserBadge } from '@/shared/ui';

import { PhotoIcon, PlayIcon, StarIcon } from '@heroicons/react/24/outline';
import { Button, Textarea } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function ProfileAddPostFeature() {
  const { sessionUser } = useAppSelector(selectSessionUser);

  return (
    <div className={cn(css['add-post'])}>
      <div className={cn(css['add-post__box-form'])}>
        <UserBadge
          isShowInfo={false}
          urlAvatar={sessionUser?.avatar}
          sizeAvatar="h-[40px] w-[40px] min-w-[40px]"
        />
        <Textarea
          className={cn(css['add-post__field-textarea'])}
          placeholder="What’s on your mind?"
          labelProps={{
            className: 'before:content-none',
          }}
        />
      </div>
      <hr className={cn('text-blue-gray-500 mt-3 mb-3 w-[100%] mx-auto')} />
      <div className={cn(css['add-post__box-filter'])}>
        <Button
          size="sm"
          variant="text"
          className={cn(css['add-post__btn-filter'], 'text-blue-gray-500')}
        >
          <PlayIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
          Live Video
        </Button>
        <Button
          size="sm"
          variant="text"
          className={cn(css['add-post__btn-filter'], 'text-blue-gray-500')}
        >
          <PhotoIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
          Image/Video
        </Button>
        <Button
          size="sm"
          variant="text"
          className={cn(css['add-post__btn-filter'], 'text-blue-gray-500')}
        >
          <StarIcon className={'min-h-[20px] min-w-[20px] w-[20px]'} />
          Activity
        </Button>
      </div>
    </div>
  );
}
