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
export type { User, Follower, ListUser };
