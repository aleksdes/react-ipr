export { FriendItemCard } from '@/entities/friends/ui/FriendItemCard.tsx';
export { Api } from './api';

export {
  friendsSagaWatcher,
  fetchFriendsAction,
  fetchFriendsCountAction,
  deleteFriendAction,
  selectFriends,
  friendsActions,
} from './model';

export type { FriendType } from './model';
