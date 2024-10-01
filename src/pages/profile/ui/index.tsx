import { ProfileStatistics } from '@/widgets/profilePage/profileStatistics';

import cn from 'classnames';

import css from './index.module.scss';

export function ProfilePage() {
  return (
    <>
      <div className={cn(css['profile-page'])}>
        <ProfileStatistics />
      </div>
    </>
  );
}
