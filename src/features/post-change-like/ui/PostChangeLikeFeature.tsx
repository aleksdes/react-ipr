import type { ReactNode } from 'react';
import { PostType } from '@/entities/posts';
import { fetchSendLikePostAction } from '@/entities/posts/model/selectors.ts';
import { useAppDispatch } from '@/shared/model';

interface IProps {
  children: (props: { onClick: () => void }) => ReactNode;
  post: PostType;
}
export function PostChangeLikeFeature({ children, post }: IProps) {
  const dispatch = useAppDispatch();

  function sendLike() {
    const isLicked = !post.isLicked;

    dispatch(
      fetchSendLikePostAction({
        postId: post.id,
        value: {
          likes: isLicked ? post.likes + 1 : post.likes - 1,
          isLicked,
        },
      })
    );
  }

  return <div>{children({ onClick: sendLike })}</div>;
}
