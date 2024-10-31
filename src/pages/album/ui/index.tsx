import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbumByIdAction, selectAlbums } from '@/entities/albums';
import { PhotoItem } from '@/entities/photos';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { IconButton, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function AlbumPage() {
  const dispatch = useAppDispatch();
  const { item } = useAppSelector(selectAlbums);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAlbumByIdAction({ url: `/${id}` }));
  }, []);

  return (
    <div className={cn(css['album-page'])}>
      <div className={cn(css['album-page__container-content'], 'rounded-xl')}>
        <div className={cn(css['album-page__header'])}>
          <div className={cn(css['album-page__title'], 'mb-4')}>
            <Typography className="font-semibold capitalize text-xl">
              {item?.name || ''}
            </Typography>
            <Typography color="gray" className="text-sm font-normal">
              {item?.photos?.length || 0} Total Photos
            </Typography>
          </div>

          <div className={cn(css['album-page__box-actions'])}>
            <IconButton
              variant="text"
              className={cn(css['album-page__settings-btn'], 'rounded-full')}
              ripple={false}
            >
              <EllipsisHorizontalIcon className="h-[28px] w-[28px] text-blue-gray-400" />
            </IconButton>
          </div>
        </div>

        <div className={cn(css['album-page__container-list'])}>
          {(item?.photos || []).map((photo, index) => (
            <PhotoItem
              data={photo}
              loading="lazy"
              className={'rounded-2xl'}
              key={index}
            ></PhotoItem>
          ))}
        </div>
      </div>
    </div>
  );
}
