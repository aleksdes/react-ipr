import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

type HeaderBlockProps = {
  title: string;
  link: string;
};
export function HeaderBlock({
  title,
  link,
  ...props
}: HeaderBlockProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-row justify-between items-baseline',
        props.className
      )}
    >
      <Typography className="text-gray-500 text-xs font-bold">
        {title}
      </Typography>

      <Link to={link} className="text-blue-500 text-sm font-bold">
        See all
      </Link>
    </div>
  );
}
