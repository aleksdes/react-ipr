import { createElement, useMemo } from 'react';
import { selectSessionUser } from '@/entities/user';
import { dayjs } from '@/shared/lib/dayjs';
import { useAppSelector } from '@/shared/model';

import {
  BriefcaseIcon,
  CalendarDaysIcon,
  LinkIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import cn from 'classnames';

import css from './index.module.scss';

export function IntroProfile() {
  const { profileInfo } = useAppSelector(selectSessionUser);

  const dataIntro = useMemo(() => {
    return [
      {
        icon: MapPinIcon,
        text: profileInfo?.address,
      },
      {
        icon: BriefcaseIcon,
        text: profileInfo?.placeOfWork,
      },
      {
        icon: CalendarDaysIcon,
        text: profileInfo?.dateBirth
          ? dayjs(profileInfo?.dateBirth).format('MMMM DD, YYYY')
          : '-',
      },
      {
        icon: LinkIcon,
        text: profileInfo?.link,
        type: 'link',
      },
    ];
  }, [profileInfo]);
  return (
    <div className={cn(css['intro-profile'])}>
      <p className={cn(css['intro-profile__title'])}>Intro</p>
      <p className={cn(css['intro-profile__intro-title'])}>
        {profileInfo?.intro}
      </p>
      <div className={cn(css['intro-profile__container-data'])}>
        {dataIntro.map((item, index) => {
          return (
            <div className={cn(css['intro-profile__intro-item'])} key={index}>
              {createElement(item.icon, {
                className: 'min-h-5 min-w-5 h-5 w-5 text-blue-gray-300',
              })}
              {item.type === 'link' ? (
                <a href={item.text} target="_blank">
                  {item.text}
                </a>
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
