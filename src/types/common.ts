interface Follower {
  id: string;
  name: string;
}
interface User {
  avatar: string;
  alias: string;
  cost: number;
  follower: Array<Follower>;
  frequency: number; // 5 news/week
}
type ListUser = Array<User>;

interface Post {
  id: string;
  idUser: string;
  aliasUSer: string;
  timeAdd: string;
  timeUpdate: string;
  content: string;
  type: "video" | "picture";
  listMedia: any; // check typeof element to display video/image/
}
type ListPost = Array<Post>;
export type { User, Follower, ListUser, ListPost, Post };
