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

type KindOfPost = "video" | "picture" | "auth";
interface Post {
  id: string;
  idUser: string;
  aliasUSer: string;
  imageAvatar: string;
  timeAdd: string;
  timeUpdate: string;
  content: string;
  type: KindOfPost;
  listMedia: any; // check typeof element to display video/image/
}
type ListPost = Array<Post>;

// Type of Result Search
interface UserOfSearch {
  id: string;
  alias: string;
  avatar: string;
  numberOfFollower: number;
}
type ListUserOfSearch = Array<UserOfSearch>;

// Follower Setting
interface FollowerSetting extends UserOfSearch {
  plan: string;
  timeLeave: number; // unit is day
  notiStatus: boolean;
}
type ListFollowerSetting =Array<FollowerSetting>

export type {
  User,
  Follower,
  ListUser,

  ListPost,
  Post,
  KindOfPost,

  ListUserOfSearch,
  UserOfSearch,

  FollowerSetting,
  ListFollowerSetting
};
