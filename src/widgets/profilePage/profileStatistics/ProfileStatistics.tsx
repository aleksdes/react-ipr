import { useMemo } from 'react';
import { selectSessionUser } from '@/entities/user';
import { useAppSelector } from '@/shared/model';
import { UserBadge } from '@/shared/ui';

import cn from 'classnames';

import css from './profileStatistics.module.scss';

export function ProfileStatistics() {
  const { sessionUser, profileInfo } = useAppSelector(selectSessionUser);

  function formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  }

  const dataCounters = useMemo(() => {
    return [
      {
        title: 'POSTS',
        count: formatNumber(profileInfo?.postCount || 0),
      },
      {
        title: 'FRIENDS',
        count: formatNumber(profileInfo?.friendsCount || 0),
      },
      {
        title: 'PHOTOS',
        count: formatNumber(profileInfo?.photosCount || 0),
      },
      {
        title: 'LIKES',
        count: formatNumber(profileInfo?.likesCount || 0),
      },
    ];
  }, [profileInfo]);

  return (
    <div className={cn(css['profile-statistics'])}>
      <div className={cn(css['profile-statistics__header'])} />
      <div className={cn(css['profile-statistics__box-content'])}>
        <div className={cn(css['profile-statistics__box-avatar'])}>
          <UserBadge
            isShowInfo={false}
            urlAvatar={sessionUser?.avatar}
            sizeAvatar="h-[100px] w-[100px] min-w-[100px]"
          />

          <div
            className={cn(
              css['profile-statistics__box-name'],
              css['profile-statistics__box-name--sm']
            )}
          >
            <p className={cn(css['profile-statistics__name'])}>
              {`${profileInfo?.middleName} ${profileInfo?.name}`}
            </p>
            <p className={cn(css['profile-statistics__nick-name'])}>
              {profileInfo?.nikName}
            </p>
          </div>
        </div>

        <div className={cn(css['profile-statistics__container-content'])}>
          <div
            className={cn(
              css['profile-statistics__box-name'],
              css['profile-statistics__box-name--md']
            )}
          >
            <p className={cn(css['profile-statistics__name'])}>
              {`${profileInfo?.middleName} ${profileInfo?.name}`}
            </p>
            <p className={cn(css['profile-statistics__nick-name'])}>
              {profileInfo?.nikName}
            </p>
          </div>

          <div className={cn(css['profile-statistics__box-counters'])}>
            {dataCounters.map((counter, index) => (
              <div
                className={cn(
                  css['profile-statistics__counter-item'],
                  'text-center'
                )}
                key={index}
              >
                <p
                  className={cn(
                    css['profile-statistics__counter-title'],
                    'text-blue-gray-400'
                  )}
                >
                  {counter.title}
                </p>
                <p className={cn(css['profile-statistics__counter-count'])}>
                  {counter.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
