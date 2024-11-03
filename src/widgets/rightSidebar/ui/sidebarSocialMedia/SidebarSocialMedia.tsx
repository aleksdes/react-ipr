import {
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  useEffect,
  useState,
} from 'react';
import { Api as ApiFriends, FriendType } from '@/entities/friends';
import { Api as ApiGroups, GroupType } from '@/entities/groups';
import { IResponseReturn } from '@/shared/api';
import { navigationMap } from '@/shared/model';
import { GroupBadge, UserBadge } from '@/shared/ui';
import { HeaderBlock } from '@/widgets/rightSidebar/ui/sidebarSocialMedia/headerBlock/HeaderBlock.tsx';

import cn from 'classnames';

import css from './sidebarSocialMedia.module.scss';

type PropsType = HTMLAttributes<HTMLDivElement>;

export const SidebarSocialMedia = forwardRef(
  ({ className, style }: PropsType, ref: LegacyRef<HTMLDivElement>) => {
    const [groups, setGroups] = useState<GroupType[]>([]);
    const [contacts, setContacts] = useState<FriendType[]>([]);

    useEffect(() => {
      const fetchDataGroups = async () => {
        const { data }: IResponseReturn = await ApiGroups.getData('', {
          isJoined: true,
          _limit: 5,
          _start: 0,
        });
        data && setGroups((data as GroupType[]) || []);
      };

      const fetchDataContacts = async () => {
        const { data }: IResponseReturn = await ApiFriends.getData('', {
          isNewMessage: true,
          _limit: 5,
          _start: 0,
        });
        data && setContacts((data as FriendType[]) || []);
      };

      fetchDataGroups().catch((e) => console.error(e));
      fetchDataContacts().catch((e) => console.error(e));
    }, []);

    return (
      <div
        ref={ref}
        style={style}
        className={cn(className, css['social-media'], 'p-[30px]')}
      >
        <HeaderBlock
          title="CONTACTS"
          link={navigationMap.friends}
          className="mb-3"
        />
        <div className="grid gap-y-3">
          {contacts.map((contact) => (
            <UserBadge
              key={contact.id}
              urlAvatar={contact.avatar}
              baseInfo={`${contact?.name} ${contact?.middleName}`}
              additionalInfo={contact.nikName}
              isBadgeVisible={contact.isNewMessage}
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
