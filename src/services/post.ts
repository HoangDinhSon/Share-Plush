import { Post, ListPost } from "@/types/common";
const post1: Post = {
  id: "123",
  idUser: "1244",
  aliasUSer: "HoangSon",
  imageAvatar:
    "https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750",
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
  imageAvatar:
    "https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750",
  timeAdd: "22/12/2012",
  timeUpdate: "23/12/2012",
  content: " hello hello 123 hello hello 123 hello hello 123 ",
  type: "picture",
  listMedia: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i61Ye1dMd6kl7szkOxSdLgmgcVMChivQ_UK5FnLuvcFYFvHp8snzhicKhobmUbzDRRg&usqp=CAU",
  ],
};
const postAuth: Post = {
  id: "123",
  idUser: "1244",
  aliasUSer: "HoangSon",
  imageAvatar:
    "https://www.fcbarcelona.com/photo-resources/2020/04/30/43337a9f-3781-4886-948c-f70912e4b1af/1920x1080_Messi_primerGol-min.jpg?width=1200&height=750",
  timeAdd: "22/12/2012",
  timeUpdate: "23/12/2012",
  content: " hello hello 123 hello hello 123 hello hello 123 ",
  type: "auth",
  listMedia: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i61Ye1dMd6kl7szkOxSdLgmgcVMChivQ_UK5FnLuvcFYFvHp8snzhicKhobmUbzDRRg&usqp=CAU",
  ],
};
const listPost: ListPost = [post1, post2, postAuth];
// const listPost: ListPost = [];
export default listPost;

