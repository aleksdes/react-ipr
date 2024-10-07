import { selectSessionUser } from '@/entities/user';
import { useAppSelector } from '@/shared/model';

import { Progress } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

export function CompleteProfile() {
  const { profileInfo } = useAppSelector(selectSessionUser);

  return (
    <div className={cn(css['complete-profile'])}>
      <p className={cn(css['complete-profile__title'])}>
        Complete Your Profile
      </p>
      <div className={'flex gap-2 flex-row items-center justify-between'}>
        <Progress
          value={(profileInfo?.completeProfile || 0) * 100}
          barProps={{ className: 'bg-blue-600' }}
        />
        <span className={cn(css['complete-profile__percent'])}>
          {(profileInfo?.completeProfile || 0) * 100}%
        </span>
      </div>
    </div>
  );
}
