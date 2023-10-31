<script setup lang="ts">
import AvatarPost from "@/components/AvatarPost.vue";
import PlanSetting from "@/pages/Setting/component/PlanSetting.vue";
import BellButton from "./BellButton.vue";
import DivideMain from "@/components/DivideMain.vue";
import { ref } from "vue";
interface SettingEachUserProps {
  id: string;
  alias: string;
  avatar: string;
  numberOfFollower: number | string;
  plan: string;
  timeLeave: number; // unit is day
  statusNotices: boolean;
}
const props = defineProps<SettingEachUserProps>();
const statusBell = ref(props.statusNotices);
const toggleBell = () => {
  statusBell.value = !statusBell.value;
};
</script>
<template>
  <div class="flex justify-between items-center p-4">
    <AvatarPost
      variant="lack"
      :alias-user="props.alias"
      :avatar-image="props.avatar"
      :number-of-follower="props.numberOfFollower"
    />
    <PlanSetting :plan="props.plan" :time="props.timeLeave" />
    <BellButton :status="statusBell" @click="toggleBell" />
  </div>
  <DivideMain />
</template>
