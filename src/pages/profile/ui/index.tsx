import { Ref, useEffect, useMemo, useRef, useState } from 'react';
import { fetchPhotosAction } from '@/entities/photos';
import { fetchPostsAction, selectPosts } from '@/entities/posts';
import { fetchProfileInfoAction, selectSessionUser } from '@/entities/user';
import { ProfileAddPostFeature } from '@/features/profile-add-post';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { CompleteProfile } from '@/widgets/profilePage/completeProfile';
import { IntroProfile } from '@/widgets/profilePage/introProfile';
import { Photos } from '@/widgets/profilePage/photos';
import { PostItem } from '@/widgets/profilePage/postItem';
import { ProfileStatistics } from '@/widgets/profilePage/profileStatistics';

import cn from 'classnames';

import css from './index.module.scss';

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const { profileInfo } = useAppSelector(selectSessionUser);
  const { posts } = useAppSelector(selectPosts);

  const elInfiniteScroll: Ref<HTMLDivElement> = useRef(null);
  const [paginationFetch, updatePaginatorFetch] = useState({
    _start: 0,
    _limit: 15,
  });

  const countPosts = useMemo(() => {
    return profileInfo?.postCount || 0;
  }, [profileInfo]);

  function refetchPosts() {
    dispatch(
      fetchPostsAction({
        filters: paginationFetch,
        isInfinite: true,
      })
    );
  }

  useEffect(() => {
    refetchPosts();
  }, [paginationFetch._start]);

  function onLoadMore() {
    if ((posts.length || 0) >= countPosts) {
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
  }, [elInfiniteScroll, profileInfo, posts]);

  useEffect(() => {
    dispatch(fetchProfileInfoAction());
    dispatch(
      fetchPhotosAction({
        filters: {
          _start: 0,
          _limit: 9,
        },
      })
    );
  }, []);

  return (
    <>
      <div className={cn(css['profile-page'])}>
        <ProfileStatistics />

        <div className={cn(css['profile-page__grid-content'])}>
          <div className={cn(css['profile-page__column-content'])}>
            <CompleteProfile />
            <IntroProfile />
            <Photos />
          </div>
          <div className={cn(css['profile-page__column-content'])}>
            <ProfileAddPostFeature />
            {posts.map((item, index) => {
              return (
                <div key={index}>
                  <PostItem post={item} />
                </div>
              );
            })}
            <div ref={elInfiniteScroll}></div>
          </div>
        </div>
      </div>
    </>
  );
}
