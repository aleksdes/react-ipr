import { Ref, useEffect, useMemo, useRef, useState } from 'react';
import {
  fetchFriendsAction,
  fetchFriendsCountAction,
  FriendItemCard,
  selectFriends,
} from '@/entities/friends';
import { FriendsSendMessageFeature } from '@/features/friends-send-message';
import { FriendsSettingsFeature } from '@/features/friends-settings';
import { useAppDispatch, useAppSelector } from '@/shared/model';

import cn from 'classnames';

import css from './index.module.scss';

export function FriendsPage() {
  const dispatch = useAppDispatch();
  const { meta, items } = useAppSelector(selectFriends);

  const elInfiniteScroll: Ref<HTMLDivElement> = useRef(null);
  const [paginationFetch, updatePaginatorFetch] = useState({
    _start: 0,
    _limit: 15,
  });

  const countFriends = useMemo(() => {
    return meta.total || 0;
  }, [meta]);

  function refetchFriends() {
    dispatch(
      fetchFriendsAction({
        filters: paginationFetch,
        isInfinite: true,
      })
    );
  }

  useEffect(() => {
    refetchFriends();
  }, [paginationFetch._start]);

  function onLoadMore() {
    if ((items.length || 0) >= countFriends) {
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
  }, [elInfiniteScroll, countFriends, items]);

  useEffect(() => {
    dispatch(fetchFriendsCountAction());
  }, []);

  function onDelete() {
    dispatch(
      fetchFriendsAction({
        filters: {
          _start: 0,
          _limit: items.length,
        },
      })
    );
  }

  return (
    <div className={cn(css['friends-page'])}>
      <div className={cn(css['friends-page__card'])}>
        {items.map((item) => {
          return (
            <FriendItemCard
              key={item.id}
              data={item}
              actionSlot={<FriendsSendMessageFeature />}
              settingsSlot={
                <FriendsSettingsFeature
                  callbackDelete={onDelete}
                  userData={item}
                />
              }
            />
          );
        })}
        <div ref={elInfiniteScroll}></div>
      </div>
    </div>
  );
}
