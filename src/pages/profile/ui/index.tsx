import { Ref, useEffect, useMemo, useRef, useState } from 'react';
import { fetchPhotosAction } from '@/entities/photos';
import { fetchPostsAction, selectPosts } from '@/entities/posts';
import { PostItem } from '@/entities/posts';
import { fetchProfileInfoAction, selectSessionUser } from '@/entities/user';
import { PostChangeLikeFeature } from '@/features/post-change-like';
import { ProfileAddPostFeature } from '@/features/profile-add-post';
import { formatNumber } from '@/shared/lib/utils.ts';
import { useAppDispatch, useAppSelector } from '@/shared/model';
import { CompleteProfile } from '@/widgets/profilePage/completeProfile';
import { IntroProfile } from '@/widgets/profilePage/introProfile';
import { Photos } from '@/widgets/profilePage/photos';
import { ProfileStatistics } from '@/widgets/profilePage/profileStatistics';

import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const { sessionUser, profileInfo } = useAppSelector(selectSessionUser);
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
                  <PostItem
                    post={item}
                    sessionUser={sessionUser}
                    profileInfo={profileInfo}
                    actionsSlot={
                      <div className={cn(css['actions'])}>
                        <PostChangeLikeFeature post={item}>
                          {(props) => (
                            <Button
                              size="sm"
                              variant="text"
                              className={cn(
                                css['actions__btn-actions'],
                                item.isLicked
                                  ? 'text-blue-500'
                                  : 'text-blue-gray-500'
                              )}
                              onClick={props.onClick}
                            >
                              {item.isLicked ? (
                                <HeartIcon
                                  className={
                                    'min-h-[20px] min-w-[20px] w-[20px]'
                                  }
                                />
                              ) : (
                                <HeartIconOutline
                                  className={
                                    'min-h-[20px] min-w-[20px] w-[20px]'
                                  }
                                />
                              )}
                              {formatNumber(item?.likes || 0)} Likes
                            </Button>
                          )}
                        </PostChangeLikeFeature>

                        <div
                          className={cn(
                            css['actions__btn-actions'],
                            'text-blue-gray-500',
                            'font-sans '
                          )}
                        >
                          <ChatBubbleOvalLeftEllipsisIcon
                            className={'min-h-[20px] min-w-[20px] w-[20px]'}
                          />
                          {formatNumber(item?.comments || 0)} Comments
                        </div>

                        <Button
                          size="sm"
                          variant="text"
                          className={cn(
                            css['actions__btn-actions'],
                            'text-blue-gray-500'
                          )}
                        >
                          <ShareIcon
                            className={'min-h-[20px] min-w-[20px] w-[20px]'}
                          />
                          {formatNumber(item?.share || 0)} Share
                        </Button>
                      </div>
                    }
                  />
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
