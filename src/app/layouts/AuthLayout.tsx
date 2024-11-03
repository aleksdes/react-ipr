import { selectTheme } from '@/entities/theme';
import { useAppSelector } from '@/shared/model';
import { BaseLayout as BaseLayoutApp } from '@/shared/ui';
import { Announcement } from '@/widgets/announcement';
import { HeaderAuth } from '@/widgets/auth/header';

export function AuthLayout() {
  const { headerHeight, announcementHeight } = useAppSelector(selectTheme);

  const paddingTop = headerHeight + announcementHeight + 'px';

  return (
    <BaseLayoutApp
      styleContainer={{ paddingTop }}
      announcementSlot={
        <Announcement>
          <span>
            An open source frontend application built with React ⚛️ and
            Feature-Sliced Design 🍰.
          </span>
        </Announcement>
      }
      headerSlot={<HeaderAuth />}
    />
  );
}
