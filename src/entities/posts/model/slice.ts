import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PostType } from './type';

export type PostsState = {
  posts: PostType[];
};

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPosts: (state: PostsState, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    },
    setMergePosts: (state: PostsState, action: PayloadAction<PostType[]>) => {
      state.posts = [...state.posts, ...action.payload];
    },
    updatePostsById: (state: PostsState, action: PayloadAction<PostType>) => {
      const findIndexPost = state.posts.findIndex(
        (post: PostType) => post.id === action.payload.id
      );
      if (findIndexPost === -1) return;
      const postNewData = { ...state.posts[findIndexPost], ...action.payload };
      state.posts[findIndexPost] = postNewData;
    },
  },
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
