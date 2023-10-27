import { UserProfile, Post } from "@/types/common";

const post1: Post = {
  id: "1",
  idUser: "1",
  aliasUSer: "Ronaldo",
  imageAvatar:
    "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTRGnALZQ3_f9afwmqLtUncWll0AZzQ9qzQsTff3q9wKL-h9l0-cj9HeiX4Tw0UxML58QsXH2Xetr7LOc4",
  timeAdd: "1/1/2022",
  timeUpdate: "1/1/2022",
  content:
    "A tall player at 6 feet 1 inch (1.85 metres), Ronaldo was a formidable athlete on the pitch. Originally a right-winger, he developed into a forward with a free-reined attacking style. He was able to mesmerize opponents with a sleight of foot that made sufficient space for openings in opposing defenses.Sep 11, 2023",
  type: "picture",
  listMedia: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i61Ye1dMd6kl7szkOxSdLgmgcVMChivQ_UK5FnLuvcFYFvHp8snzhicKhobmUbzDRRg&usqp=CAU",
  ],
};
const post2: Post = {
  id: "2",
  idUser: "2",
  aliasUSer: "Messi",
  imageAvatar:
    "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
  timeAdd: "2/2/2022",
  timeUpdate: "2/2/2022",
  content:
    "A tall player at 6 feet 1 inch (1.85 metres), Ronaldo was a formidable athlete on the pitch. Originally a right-winger, he developed into a forward with a free-reined attacking style. He was able to mesmerize opponents with a sleight of foot that made sufficient space for openings in opposing defenses.Sep 11, 2023",
  type: "picture",
  listMedia: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i61Ye1dMd6kl7szkOxSdLgmgcVMChivQ_UK5FnLuvcFYFvHp8snzhicKhobmUbzDRRg&usqp=CAU",
  ],
};
const profileOfUser: UserProfile = {
  id: "1",
  coverPhoto:
    "https://images.template.net/wp-content/uploads/2015/04/Awesome-Free-Facebook-Cover-Backgrounds.jpg", //" anh biaìa "
  avatar:
    "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTacJ-ij3c5gMEz1HtqicuvorUYzfm9oyyxRi7QMz5Kq8f9bX1URv4jdhTcZTcOzi4tdCCQ6pYHtdLC9yU", //"anh dai dien"
  alias: "Ronaldo", // link benên thu 3
  numberOfImage: 15000,
  numberOfVideo: 200000,
  description:
    " He is considered to be one of the greatest footballers of all time, and, by some, as the greatest ever. Ronaldo began his professional career with Sporting CP at age 17 in 2002, and signed for Manchester United a year later. He won three back-to-back Premier League titles: in 2006-07, 2007-08, and 2008-09. ",
  listPost: [
    post1,
    post1,
    post1,
    post1,
    post1,
    post1,
    post1,
    post1,
    post1,
    post2,
  ], // a array keep many Post

};
export { profileOfUser };
