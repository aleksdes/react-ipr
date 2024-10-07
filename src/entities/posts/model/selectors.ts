export const selectPosts = (state: RootState) => state.postsReducer;

export const fetchPostsAction = (payload?: any) => {
  return { type: 'FETCH_POSTS', payload };
};
