import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlbumItem, fetchAlbumsAction, selectAlbums } from '@/entities/albums';
import { navigationMap, useAppDispatch, useAppSelector } from '@/shared/model';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function AlbumsPageTab() {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectAlbums);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAlbumsAction());
  }, []);

  function goDetailPage(id: string) {
    navigate(`${navigationMap.albums}/${id}`);
  }

  return (
    <div className={cn(css['albums-content'])}>
      <div className={cn(css['albums-content__title'], 'mb-4')}>
        <Typography className="font-semibold">Albums</Typography>
        <Typography color="gray" className="text-sm font-normal">
          {items.length} Total Albums
        </Typography>
      </div>

      <div className={cn(css['albums-content__container-list'])}>
        {items?.map((album, index) => (
          <AlbumItem
            data={album}
            key={index}
            onClick={() => goDetailPage(album.id)}
          />
        ))}{' '}
      </div>
    </div>
  );
}
