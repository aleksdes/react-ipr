export type PostType = {
  id: string | number;
  createdAt: Date;
  message: string;
  likes: number;
  comments: number;
  share: number;
  images: string[];
  isLicked: boolean;
};
