export interface AlbumType<T> {
  id: string;
  name: string;
  photos: T[];
  createdAt: Date;
}
