import { forwardRef, HTMLAttributes, LegacyRef } from 'react';
import { UserBadge } from '@/shared/ui';
import { HeaderBlock } from '@/widgets/rightSidebar/ui/sidebarSocialMedia/headerBlock/HeaderBlock.tsx';

import cn from 'classnames';

import css from './style.module.scss';

type PropsType = HTMLAttributes<HTMLDivElement>;

export const SidebarSocialMedia = forwardRef(
  ({ className, style }: PropsType, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        style={style}
        className={cn(className, css['social-media'], 'p-[30px] pt-0')}
      >
        <HeaderBlock title="CONTACTS" link="/" className="mb-3" />
        <div className="grid gap-y-3">
          {[...Array(5)].map((_, i) => (
            <UserBadge
              key={i}
              urlAvatar="https://docs.material-tailwind.com/img/face-5.jpg"
            />
          ))}
        </div>

        <hr className="my-5 border-blue-gray-50" />

        <HeaderBlock title="GROUPS" link="/" className="mb-3" />
        <div className="grid gap-y-3">
          {[...Array(5)].map((_, i) => (
            <UserBadge
              key={i}
              urlAvatar="https://docs.material-tailwind.com/img/face-3.jpg"
            />
          ))}
        </div>
      </div>
    );
  }
);
