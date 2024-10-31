export { friendsSagaWatcher } from '@/entities/friends/model/saga.ts';
export {
  fetchFriendsAction,
  fetchFriendsCountAction,
  deleteFriendAction,
  selectFriends,
} from './selectors.ts';
export { friendsActions } from './slice.ts';
export type { FriendType } from './type.ts';
