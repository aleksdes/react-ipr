import { useEffect } from 'react';
import { animated, useSpringValue } from '@react-spring/web';

import {
  Avatar,
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
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className="h-[35px] w-[35px] min-w-[35px] border-2 border-white"
            />
          </Badge>
        </ListItemPrefix>

        {!mini && (
          <animated.div style={{ opacity }}>
            <Typography className="font-bold text-sm">Angela Lee</Typography>
            <Typography color="gray" className="text-xs font-normal">
              @anglee
            </Typography>
          </animated.div>
        )}
      </ListItem>
    </>
  );
}
