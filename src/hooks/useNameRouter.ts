import { useRouter } from "vue-router";
function useNameRouter() {
  const router = useRouter();
  const nameRouter = router.currentRoute.value.name;
  return nameRouter;
}
type UserNameRouter = ReturnType<typeof useNameRouter>;
export { useNameRouter };
export type { UserNameRouter };
/* 
usage get name of router

*/
