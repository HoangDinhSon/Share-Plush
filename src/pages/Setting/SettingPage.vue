<script setup lang="ts">
import { useNameRouter } from "@/hooks/useNameRouter";
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "@/components/HeadingPage.vue";
import SettingEachUser from "@/pages/Setting/component/SettingEachUser.vue";
import { listFollowerSetting } from "@/services/listFollowerSetting";

const nameRouter = useNameRouter();
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader :name-router="nameRouter" />
    <div
      class="card-main mb-2 text-base font-semibold text-[var(--color-text-grey)]"
    >
      Your Follow list of idols:
    </div>
    <div class="card-main">
      <div class="card-shadow-main relative mt-8">
        <p class="header-list left-4">Idol Name</p>
        <p class="header-list left-[calc(100%/3*1.7)]">Plan</p>
        <p class="header-list right-4">Noti</p>
        <SettingEachUser
          v-for="item in listFollowerSetting"
          :id="item.id"
          :alias="item.alias"
          :avatar="item.avatar"
          :numberOfFollower="item.numberOfFollower"
          :plan="item.plan"
          :timeLeave="item.timeLeave"
          :statusNotices="item.notiStatus"
        />
      </div>
      <p class="text-[12px] text-[#4F627D]">
        You can only receive notification update if turn on Idol Noti. Other
        update will only can review on web.
      </p>
    </div>
  </div>
</template>
<style>
.header-list {
  position: absolute;
  top: -30px;
  font-weight: 500;
  color: var(--color-text-grey);
}
</style>
