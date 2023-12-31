import NewFeed from "../pages/NewFeed/NewFeed.vue";
import Welcome from "@/pages/Welcome/Welcome.vue";
import SearchPage from "@/pages/Search/SearchPage.vue";
import SettingPage from  "@/pages/Setting/SettingPage.vue";
import ProfilePage from "@/pages/Profile/ProfilePage.vue";
import FollowPlanPage from "@/pages/FollowPlan/FollowPlanPage.vue";
import * as VueRouter from "vue-router";

import { ROUTER, NAME_ROUTER } from "./constant-router";

const routes = [
  { path: ROUTER.welcome, name: NAME_ROUTER.welcome, component: Welcome },
  { path: ROUTER.newfeed, name: NAME_ROUTER.newfeed, component: NewFeed },
  { path: ROUTER.search, name: NAME_ROUTER.search, component: SearchPage },
  { path: ROUTER.setting, name: NAME_ROUTER.setting, component: SettingPage },
  { path: ROUTER.profile, name: NAME_ROUTER.profile, component: ProfilePage },
  { path: ROUTER.followPlan, name: NAME_ROUTER.followPlan, component: FollowPlanPage },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes, // short for `routes: routes`
});

export default router;
