import { Ref, useEffect, useMemo, useRef, useState } from 'react';
import {
  fetchJoinedGroupsAction,
  fetchJoinedGroupsCountAction,
  selectGroups,
} from '@/entities/groups';
import { GroupItem } from '@/entities/groups';
import { GroupSubscriptionFeature } from '@/features/group-subscription';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { RecommendedGroups } from '@/widgets/groups/recommended';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function GroupsPage() {
  const dispatch = useAppDispatch();
  const { joinedCount, joinedGroups } = useAppSelector(selectGroups);

  const elInfiniteScroll: Ref<HTMLDivElement> = useRef(null);
  const [paginationFetch, updatePaginatorFetch] = useState({
    _start: 0,
    _limit: 15,
  });

  const countGroups = useMemo(() => {
    return joinedCount || 0;
  }, [joinedCount]);

  function refetchMyGroups() {
    dispatch(
      fetchJoinedGroupsAction({
        filters: {
          ...paginationFetch,
          isJoined: true,
        },
        isInfinite: true,
      })
    );
  }

  useEffect(() => {
    refetchMyGroups();
  }, [paginationFetch._start]);

  function onLoadMore() {
    if ((joinedGroups.length || 0) >= countGroups) {
      return;
    }

    updatePaginatorFetch((prevState) => {
      const start = Number(prevState._start) + Number(prevState._limit);
      const newState = {
        _start: start,
        _limit: 15,
      };
      // Object.assign would also work
      return { ...prevState, ...newState };
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        onLoadMore();
      }
    },
    {
      threshold: 0,
      rootMargin: '0px 0px 75px 0px',
    }
  );

  useEffect(() => {
    observer.disconnect();

    if (elInfiniteScroll.current) {
      observer.observe(elInfiniteScroll.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elInfiniteScroll, joinedGroups, joinedCount]);

  useEffect(() => {
    dispatch(
      fetchJoinedGroupsCountAction({
        filters: { isJoined: true },
      })
    );
  }, []);

  return (
    <>
      <div className={cn(css['groups-page'])}>
        <RecommendedGroups />

        <div className={cn(css['groups-page__container-subscriptions'])}>
          <Typography className="font-semibold">Your subscriptions</Typography>

          <div className={cn(css['groups-page__grid-content'])}>
            {joinedGroups.map((item) => {
              return (
                <GroupItem
                  key={item.id}
                  data={item}
                  actionSlot={<GroupSubscriptionFeature groupData={item} />}
                />
              );
            })}
            <div ref={elInfiniteScroll}></div>
          </div>
        </div>
      </div>
    </>
  );
}
