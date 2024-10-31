import { HTMLAttributes } from 'react';
import { PhotoType } from '@/entities/photos';
import { useLazyLoad } from '@/shared/lib/use/useLazyLoad.ts';
import { formatNumber } from '@/shared/lib/utils.ts';

import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  data: PhotoType;
  loading: 'eager' | 'lazy';
} & HTMLAttributes<HTMLDivElement>;

export function PhotoItem({ data, loading = 'eager', ...props }: Props) {
  const { isIntersecting, imgRef } = useLazyLoad();

  return (
    <div className={cn(css['photo-item'], props?.className, 'overflow-hidden')}>
      <img
        ref={imgRef}
        className={cn('object-cover object-center')}
        src={isIntersecting ? data.url : undefined}
        alt={'image'}
        style={{ opacity: isIntersecting ? 1 : 0 }}
        loading={loading}
      />
      <div className={cn(css['photo-item__overlay'])}>
        <div className={cn(css['photo-item__counter-item'])}>
          <HeartIcon className="w-[20px] h-[20px]" />
          <Typography color="white" className="text-xs font-semibold">
            {formatNumber(data.likesCount)}
          </Typography>
        </div>
        <div className={cn(css['photo-item__counter-item'])}>
          <ChatBubbleOvalLeftIcon className="w-[20px] h-[20px]" />
          <Typography color="white" className="text-xs font-semibold">
            {formatNumber(data.commentsCount)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
