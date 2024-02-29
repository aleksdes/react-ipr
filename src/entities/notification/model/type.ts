import type { UserType } from '@/entities/user';

export type UserNotificationType = Partial<
  Pick<UserType, 'id' | 'name' | 'middleName' | 'avatar'>
>;

export interface NotificationType {
  id: number;
  user: UserNotificationType;
  isRead: boolean;
  createdAt: string | number;
  eventMessage: string;
}
