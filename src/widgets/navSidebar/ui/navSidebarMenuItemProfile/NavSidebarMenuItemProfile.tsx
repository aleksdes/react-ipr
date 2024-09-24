import { useEffect } from 'react';
import { animated, useSpringValue } from '@react-spring/web';
import { selectSessionUser } from '@/entities/user';
import { useAppSelector } from '@/shared/model';
import { UserBadge } from '@/shared/ui';

import {
  Badge,
  ListItem,
  ListItemPrefix,
  Typography,
} from '@material-tailwind/react';
import cn from 'classnames';

type MenuItemProfileProps = {
  mini: boolean;
  isEvent?: boolean;
};

export function NavSidebarMenuItemProfile({
  mini,
  isEvent,
}: MenuItemProfileProps) {
  const { sessionUser } = useAppSelector(selectSessionUser);

  const opacity = useSpringValue(0, {
    config: {
      duration: 100,
    },
  });

  useEffect(() => {
    setTimeout(() => void opacity.start(!mini ? 1 : 0), !mini ? 300 : 0);
  }, [mini, opacity]);

  return (
    <>
      <ListItem className="overflow-hidden h-[80px]">
        <ListItemPrefix className={cn(mini ? 'mr-0' : 'mr-3')}>
          <Badge
            color="red"
            invisible={!isEvent}
            overlap="circular"
            className="border-2 border-white"
          >
            <UserBadge
              isShowInfo={false}
              urlAvatar={sessionUser?.avatar}
              sizeAvatar="h-[35px] w-[35px] min-w-[35px]"
            />
          </Badge>
        </ListItemPrefix>

        {!mini && (
          <animated.div style={{ opacity }}>
            <Typography className="font-bold text-sm">
              {`${sessionUser?.name} ${sessionUser?.middleName}`}
            </Typography>
            <Typography color="gray" className="text-xs font-normal">
              {sessionUser?.nikName}
            </Typography>
          </animated.div>
        )}
      </ListItem>
    </>
  );
}
