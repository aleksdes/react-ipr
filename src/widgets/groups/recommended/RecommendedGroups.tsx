import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GroupItem, GroupType, selectGroups } from '@/entities/groups';
import { fetchRecommendedGroupsAction } from '@/entities/groups';
import { GroupSubscriptionFeature } from '@/features/group-subscription';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function RecommendedGroups() {
  const dispatch = useAppDispatch();
  const { recommendedGroups } = useAppSelector(selectGroups);

  function refetchRecommended() {
    dispatch(
      fetchRecommendedGroupsAction({
        filters: {
          _start: 0,
          _limit: 2,
          isRecommended: true,
          isJoined: false,
        },
      })
    );
  }

  useEffect(() => {
    refetchRecommended();
  }, []);

  return (
    <div className={cn(css['recommended-card'])}>
      <div className={cn(css['recommended-card__header'])}>
        <p className={'base-title'}>Groups</p>

        <div className={cn(css['recommended-card__box-actions'])}>
          <IconButton
            variant="outlined"
            className={cn(
              css['recommended-card__search-btn'],
              'text-blue-gray-500',
              'rounded-full'
            )}
            ripple={false}
          >
            <MagnifyingGlassIcon className="h-[20px] w-[20px]" />
          </IconButton>

          <Button
            className={cn(css['recommended-card__add-btn'], 'bg-blue-700')}
          >
            <PlusIcon className="h-[20px] w-[20px]" />
            Create New Group
          </Button>
        </div>
      </div>

      <hr className={cn('text-blue-gray-500 w-[100%] mx-auto')} />

      <div className={cn(css['recommended-card__box-content'])}>
        <div className={cn(css['recommended-card__box-content-title'])}>
          <div>
            <Typography className="font-semibold">Suggested for you</Typography>
            <Typography className="text-sm font-medium text-blue-gray-400">
              Groups you might be interested in.
            </Typography>
          </div>

          <Link to="/" className="text-blue-500 text-sm font-bold">
            See all
          </Link>
        </div>

        <div className={cn(css['recommended-card__container-list'])}>
          {recommendedGroups.length &&
            recommendedGroups.map((item: GroupType) => (
              <GroupItem
                key={item.id}
                data={item}
                actionSlot={<GroupSubscriptionFeature groupData={item} />}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
