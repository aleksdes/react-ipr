export type UserNotificationType = {
  id: number;
  name: string;
  middleName: string;
  avatar: string;
};

export interface NotificationType {
  id: string;
  user: UserNotificationType;
  isRead: boolean;
  createdAt: string | number;
  eventMessage: string;
}
