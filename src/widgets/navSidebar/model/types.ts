import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export type navSidebarMenuItemType = {
  title: string;
  link: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
};
