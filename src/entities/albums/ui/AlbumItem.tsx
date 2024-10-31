import { AlbumType } from '@/entities/albums';
import { PhotoType } from '@/entities/photos';
import { useLazyLoad } from '@/shared/lib/use/useLazyLoad.ts';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  data: AlbumType<PhotoType>;
  styleContainer?: { [key: string]: string };
  onClick: () => void;
};

export function AlbumItem({ data, styleContainer, onClick }: Props) {
  const { isIntersecting, imgRef } = useLazyLoad();

  return (
    <div className={cn(css['album-item'])} style={styleContainer}>
      <div className={cn(css['album-item__title'], 'mb-2')}>
        <Typography
          className={cn(css['album-item__name'], 'font-semibold capitalize')}
        >
          {data.name}
        </Typography>{' '}
        <Typography color="gray" className="text-sm font-normal">
          {data.photos.length} Total Photos
        </Typography>
      </div>

      <div
        className={cn(
          css['album-item__box-preview'],
          'rounded-xl overflow-hidden cursor-pointer'
        )}
        onClick={onClick}
      >
        {data.photos.length ? (
          <img
            ref={imgRef}
            className={cn('object-center')}
            src={
              isIntersecting && data.photos[0] ? data.photos[0].url : undefined
            }
            alt={'album preview'}
            style={{ opacity: isIntersecting ? 1 : 0 }}
            loading="lazy"
          />
        ) : (
          <Typography color="gray" className="italic">
            Not images
          </Typography>
        )}
      </div>
    </div>
  );
}
