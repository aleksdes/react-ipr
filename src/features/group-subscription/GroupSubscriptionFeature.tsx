import { GroupType } from '@/entities/groups';
import { joinGroupAction, leaveGroupAction } from '@/entities/groups';
import { useAppDispatch } from '@/shared/model';

import { Button } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  groupData: GroupType;
};

export function GroupSubscriptionFeature({ groupData }: Props) {
  const dispatch = useAppDispatch();

  function updateSubscription() {
    if (groupData.isJoined) {
      dispatch(
        leaveGroupAction({
          url: `/${groupData.id}`,
          payloadData: { isJoined: false },
        })
      );
    } else {
      dispatch(
        joinGroupAction({
          url: `/${groupData.id}`,
          payloadData: { isJoined: true },
        })
      );
    }
  }

  return (
    <Button
      onClick={updateSubscription}
      className={cn(
        css['btn-subscription'],
        groupData.isJoined ? 'text-blue-gray-400' : 'text-blue-500'
      )}
    >
      {groupData.isJoined ? 'Leave Group' : 'Join Group'}
    </Button>
  );
}
