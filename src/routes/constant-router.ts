const ROUTER = {
  welcome: "/",
  login: "/login",
  newfeed: "/newfeed",
  search: "/search",
  setting: "/setting",
  profile: "/profile",
  follow: "/follow"
};
const NAME_ROUTER = {
  welcome: "welcome",
  login: "login",
  newfeed: "newfeed",
  search: "search",
  setting: "setting",
  profile: "profile",
  follow: "follow",
};
type RouterKey = keyof typeof NAME_ROUTER;
export { ROUTER, NAME_ROUTER };
export type { RouterKey };
