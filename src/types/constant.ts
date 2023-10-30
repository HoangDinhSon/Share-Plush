import type { KindOfPlan } from "./page-follow-plan";
const CONTENT_SUB_HEADER = {
  search: "Search on SharePlus",
  setting: "Setting",
  userProfile: "User Profile",
  followPlant: "Follow Plans",
};
interface TypeListPlan {
  plan: string;
  price: string;
  discount:string;
  kindOfPlanIcon: KindOfPlan;
}
const LIST_PLAN_UI: TypeListPlan[] = [
  {
    plan: "1 Month VIP Plan",
    price: "200 USD",
    kindOfPlanIcon: "oneMonth",
    discount:""
  },
  {
    plan: "3 Month VIP Plan",
    price: "550 USD",
    kindOfPlanIcon: "threeMonth",
    discount:"9%"
  },
  {
    plan: "6 Month VIP Plan",
    price: "1100 USD",
    kindOfPlanIcon: "sixMonth",
    discount:"9%"
  },
  {
    plan: "12 Month VIP Plan",
    price: "2000 USD",
    kindOfPlanIcon: "oneYear",
    discount:"17%"
  },
];
export { CONTENT_SUB_HEADER, LIST_PLAN_UI };
