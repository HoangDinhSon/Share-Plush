import { Post, ListPost } from "@/types/common";
const post1: Post = {
  id: "123",
  idUser: "1244",
  aliasUSer: "HoangSon",
  timeAdd: "22/12/2012",
  timeUpdate: "23/12/2012",
  content: " video video video hello 123 hello hello 123 hello hello 123 ",
  type: "video",
  listMedia: ["https://www.youtube.com/embed/tgbNymZ7vqY"],
};
const post2: Post = {
  id: "123",
  idUser: "1244",
  aliasUSer: "HoangSon",
  timeAdd: "22/12/2012",
  timeUpdate: "23/12/2012",
  content: " hello hello 123 hello hello 123 hello hello 123 ",
  type: "picture",
  listMedia: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i61Ye1dMd6kl7szkOxSdLgmgcVMChivQ_UK5FnLuvcFYFvHp8snzhicKhobmUbzDRRg&usqp=CAU",
  ],
};
const listPost: ListPost = [post1, post2, post1];
export default listPost;
