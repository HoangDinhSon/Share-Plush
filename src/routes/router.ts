import Profiles from "../pages/Profiles/Profiles.vue";
import Welcome from "../pages/Welcome/Welcome.vue";
import * as VueRouter from "vue-router";

import { ROUTER } from "./constant-router";

const routes = [
  { path: ROUTER.welcome, name: "Welcome", component: Welcome },
  { path: ROUTER.profile, name: "Profiles", component: Profiles },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes, // short for `routes: routes`
});

export default router;
