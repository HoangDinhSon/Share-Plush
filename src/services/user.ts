import type { ListUser, User } from "@/types/common";
const firstUser: User = {
  alias: "Hoang son",
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
  cost: 50000,
  follower: [
    { id: "123", name: "Hoang Lam" },
    { id: "123", name: "Hoang Lam" },
  ],
  frequency: 500,
};
const listUser: ListUser = [
  firstUser,
  firstUser,
  firstUser,
  firstUser,
  firstUser,
  firstUser,
  firstUser,
  firstUser,
  firstUser,
  firstUser,
];
export default listUser;
