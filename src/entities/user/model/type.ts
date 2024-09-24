export type SessionUserType = {
  id: string | number;
  name: string;
  middleName: string;
  avatar: string;
  nikName: string;
  createdAt: Date;
};

export type ProfileUserType = SessionUserType & {
  email: string;
  address: string;
  placeOfWork: string;
  dateBirth: string;
  link: string;
  intro: string;
  completeProfile: number;
  postCount: number;
  friendsCount: number;
  photosCount: number;
  likesCount: number;
};
