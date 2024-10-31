export const selectFriends = (state: RootState) => state.friendsReducer;

export const fetchFriendsAction = (payload?: any) => {
  return { type: 'FETCH_FRIENDS', payload };
};
export const fetchFriendsCountAction = () => {
  return { type: 'FETCH_FRIENDS_COUNT' };
};
export const deleteFriendAction = (payload?: any) => {
  return { type: 'DELETE_FRIEND', payload };
};
