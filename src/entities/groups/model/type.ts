export interface GroupType {
  id: string;
  name: string;
  imagePreview: string;
  avatar: string;
  city: string;
  countDayPost: number;
  isJoined: boolean;
  isRecommended: boolean;
  countUsers: number;
  usersPreviews: string[];
  createdAt: Date;
}
