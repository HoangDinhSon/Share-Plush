import { ListFollowerSetting, FollowerSetting } from "@/types/common";

const followerSetting1: FollowerSetting = {
  id: "1",
  alias: "Hoang Lam",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7ICPBAHyCCEieP8Pn7Qixfx445N9h89xGg&usqp=CAU",
  numberOfFollower: 10,
  plan: "3M Plan",
  notiStatus: true,
  timeLeave: 20,
};
const followerSetting2: FollowerSetting = {
  id: "1",
  alias: "Hoang Lam",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7ICPBAHyCCEieP8Pn7Qixfx445N9h89xGg&usqp=CAU",
  numberOfFollower: 10,
  plan: "3M Plan",
  notiStatus: true,
  timeLeave: 20,
};
const followerSetting3: FollowerSetting = {
  id: "1",
  alias: "Hoang Lam",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7ICPBAHyCCEieP8Pn7Qixfx445N9h89xGg&usqp=CAU",
  numberOfFollower: 10,
  plan: "3M Plan",
  notiStatus: false,
  timeLeave: 20,
};

const listFollowerSetting: ListFollowerSetting = [
  followerSetting1,
  followerSetting2,
  followerSetting3,
];
export { listFollowerSetting };
