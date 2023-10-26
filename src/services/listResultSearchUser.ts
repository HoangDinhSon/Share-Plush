import { ListUserOfSearch, UserOfSearch } from "@/types/common";
const avatar=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBRttRIYIPfaqMYB5ydcPFpl1KHGhaSmjOQ&usqp=CAU'
const user1: UserOfSearch = {
  id: "1",
  alias:"Hoang son 3",
  avatar:avatar,
  numberOfFollower: 50,
};
const user2: UserOfSearch = {
  id: "2",
  alias: "Hoang son 2",
  avatar: avatar,
  numberOfFollower: 50,
};
const user3: UserOfSearch = {
  id: "3",
  alias: "Hoang son 3",
  avatar: avatar,
  numberOfFollower: 50,
};
const listResultSearch: ListUserOfSearch = [user1, user2, user3];
export { listResultSearch };
