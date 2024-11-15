import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

type Props = {
  className: string;
};
export function AuthPagePreviewBlock({ className }: Props) {
  return (
    <div className={cn(css['preview-block'], className)}>
      <img
        className="w-full object-cover object-center"
        src="/images/auth-img-1.svg"
        alt="Auth image"
      />
      <div className="text-center">
        <Typography className={cn(css['preview-block__title'], 'font-normal')}>
          Customizable Multipurpose Dashboard
        </Typography>
        <Typography className={cn(css['preview-block__desc'], 'font-normal')}>
          Everything you need in an easily customizable dashboard.
        </Typography>
      </div>
    </div>
  );
}
