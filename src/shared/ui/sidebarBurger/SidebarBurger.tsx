import { Bars3Icon } from '@heroicons/react/24/solid';
import { IconButton, IconButtonProps } from '@material-tailwind/react';
import cn from 'classnames';

type IProps = Partial<IconButtonProps>;

export function SidebarBurger({ className, onClick }: IProps) {
  return (
    <IconButton
      onClick={onClick}
      variant="text"
      size="sm"
      className={cn(className, 'text-blue-gray-500')}
    >
      <Bars3Icon className="h-6 w-6" />
    </IconButton>
  );
}
