import type { UserType } from '@/entities/users';

export type UserNotificationType = Partial<
  Pick<UserType, 'id' | 'name' | 'middleName' | 'avatar'>
>;

export interface NotificationType {
  id: string;
  user: UserNotificationType;
  isRead: boolean;
  createdAt: string | number;
  eventMessage: string;
}
