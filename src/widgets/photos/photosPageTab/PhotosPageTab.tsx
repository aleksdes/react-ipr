import { useEffect } from 'react';
import { fetchPhotosAction, PhotoItem, selectPhotos } from '@/entities/photos';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function PhotosPageTab() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectPhotos);

  useEffect(() => {
    dispatch(fetchPhotosAction());
  }, []);

  return (
    <div className={cn(css['photos-content'])}>
      <div className={cn(css['photos-content__title'], 'mb-4')}>
        <Typography className="font-semibold">Total Photos</Typography>
        <Typography color="gray" className="text-sm font-normal">
          {items.length} Total Photos
        </Typography>
      </div>

      <div className={cn(css['photos-content__container-list'])}>
        {items?.map((photo, index) => (
          <PhotoItem
            data={photo}
            loading="lazy"
            className={'rounded-2xl'}
            key={index}
          ></PhotoItem>
        ))}
      </div>
    </div>
  );
}
