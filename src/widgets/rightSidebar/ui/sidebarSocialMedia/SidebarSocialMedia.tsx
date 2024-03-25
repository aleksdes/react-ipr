import {
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  // useEffect,
  // useState,
} from 'react';
import { GroupBadge, UserBadge } from '@/shared/ui';
import { HeaderBlock } from '@/widgets/rightSidebar/ui/sidebarSocialMedia/headerBlock/HeaderBlock.tsx';

import cn from 'classnames';

// import { IResponseReturn, useApi } from 'shared/api';
import css from './style.module.scss';

type PropsType = HTMLAttributes<HTMLDivElement>;

export const SidebarSocialMedia = forwardRef(
  ({ className, style }: PropsType, ref: LegacyRef<HTMLDivElement>) => {
    // const [appState, setAppState] = useState<any[]>([]);
    //
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const { data }: IResponseReturn = await useApi.get('/posts');
    //     data && setAppState(data);
    //     console.log('appState', data, appState);
    //   };
    //
    //   fetchData().catch(console.error);
    // }, [setAppState]);

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

        <HeaderBlock title="GROUPS" link="/" className="mb-3" />
        <div className="grid gap-y-3">
          {[...Array(5)].map((_, i) => (
            <GroupBadge
              key={i}
              // urlAvatar="https://docs.material-tailwind.com/img/face-3.jpg"
              baseInfo="Adsds dsc sdv"
            />
          ))}
        </div>
      </div>
    );
  }
);
