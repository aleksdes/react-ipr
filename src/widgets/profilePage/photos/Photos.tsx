import { Link } from 'react-router-dom';
import { selectPhotos } from '@/entities/photos';
import { navigationMap, useAppSelector } from '@/shared/model';

import cn from 'classnames';

import css from './index.module.scss';

export function Photos() {
  const { items } = useAppSelector(selectPhotos);

  return (
    <div className={cn(css['photos'])}>
      <div className={cn(css['photos__header'])}>
        <p className={cn(css['photos__title'])}>Photos</p>
        <Link
          to={navigationMap.photos}
          className="text-blue-500 text-sm font-bold"
        >
          See all
        </Link>
      </div>

      <div className={cn(css['photos__list'])}>
        {items?.map((photo, index) => (
          <img
            className="rounded-lg object-cover object-center"
            src={photo.url}
            alt={'image_' + index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
