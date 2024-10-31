// import { FriendType } from '@/entities/friends';
import { Button } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

// type Props = {
//   userData: FriendType;
// };

export function FriendsSendMessageFeature() {
  return (
    <Button className={cn(css['btn-send'], 'text-blue-400')}>Message</Button>
  );
}
