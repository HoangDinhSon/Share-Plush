const ROUTER = {
  welcome: "/",
  login: "/login",
  newfeed: "/newfeed",
  search: "/search",
  setting: "/setting",
  profile: "/profile",
  followPlan: "/follow-plan"
};
const NAME_ROUTER = {
  welcome: "welcome",
  login: "login",
  newfeed: "newfeed",
  search: "search",
  setting: "setting",
  profile: "profile",
  followPlan: "followPlan",
};
type RouterKey = keyof typeof NAME_ROUTER;
export { ROUTER, NAME_ROUTER };
export type { RouterKey };
