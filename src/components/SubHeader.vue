<script setup lang="ts">
import SubHeadingNewFeed from "@/pages/NewFeed/container/SubHeadingNewFeed.vue";
import SubHeadingCommon from "@/components/SubHeadingCommon.vue";
import type { RouteRecordName } from "vue-router";
import { NAME_ROUTER } from "@/routes/constant-router";
interface SubHeaderProps {
  nameRouter: RouteRecordName | null | undefined;
}
const { newfeed } = NAME_ROUTER;
const { nameRouter } = defineProps<SubHeaderProps>();
</script>
<template>
  <div class="card-main mb-[9px]">
    <SubHeadingNewFeed v-if="nameRouter == newfeed" />
    <SubHeadingCommon v-else :name-router="nameRouter"  />
  </div>
</template>

<!-- 
How To Usage 
<script>
import { useRouter } from "vue-router";
const router =useRouter();
const nameRouter = router.currentRoute.value.name
</script>
<template>
    <SubHeader :name-router="nameRouter"/>
</template>
 -->
