import {
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  useEffect,
  useState,
  // useEffect,
  // useState,
} from 'react';
import { Api, GroupType } from '@/entities/groups';
import { IResponseReturn } from '@/shared/api';
import { navigationMap } from '@/shared/model';
import { GroupBadge, UserBadge } from '@/shared/ui';
import { HeaderBlock } from '@/widgets/rightSidebar/ui/sidebarSocialMedia/headerBlock/HeaderBlock.tsx';

import cn from 'classnames';

// import { IResponseReturn, useApi } from '@/shared/api';
import css from './sidebarSocialMedia.module.scss';

type PropsType = HTMLAttributes<HTMLDivElement>;

export const SidebarSocialMedia = forwardRef(
  ({ className, style }: PropsType, ref: LegacyRef<HTMLDivElement>) => {
    const [groups, setGroups] = useState<GroupType[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const { data }: IResponseReturn = await Api.getData('', {
          isJoined: true,
          _limit: 5,
          _start: 0,
        });
        data && setGroups((data?.data as GroupType[]) || data || []);
      };

      fetchData().catch((e) => console.error(e));
    }, []);

    return (
      <div
        ref={ref}
        style={style}
        className={cn(className, css['social-media'], 'p-[30px]')}
      >
        <HeaderBlock title="CONTACTS" link="/" className="mb-3" />
        <div className="grid gap-y-3">
          {[...Array(5)].map((_, i) => (
            <UserBadge
              key={i}
              // urlAvatar="https://docs.material-tailwind.com/img/face-5.jpg"
              baseInfo="Aasfcsd dscsd"
              additionalInfo="dcsdsdvsdv"
            />
          ))}
        </div>

        <hr className="my-5 border-blue-gray-50" />

        <HeaderBlock
          title="GROUPS"
          link={navigationMap.groups}
          className="mb-3"
        />
        <div className="grid gap-y-3">
          {groups.map((item) => (
            <GroupBadge
              key={item.id}
              urlAvatar={item.avatar}
              baseInfo={item.name}
            />
          ))}
        </div>
      </div>
    );
  }
);
