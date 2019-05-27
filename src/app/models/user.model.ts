export interface UserPartial {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Picture {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
