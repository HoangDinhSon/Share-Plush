<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "@/components/HeadingPage.vue";
import { useNameRouter } from "@/hooks/useNameRouter";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import SearchIcon from "@/assets/icon/SearchIcon.vue";
import AvatarPost from "@/components/AvatarPost.vue";
import ArrowRightIcon from "@/assets/icon/ArrowRightIcon.vue";
const nameRouter = useNameRouter();
const value = ref("");
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader :name-router="nameRouter" />

    <div class="card-main">
      <div class="relative">
        <span class="absolute top-[11px] left-4">
          <SearchIcon :scale="0.8" />
        </span>
        <InputText
          v-model="value"
          placeholder="Search"
          class="pl-[40px] py-[8.5px] w-full"
        />
      </div>
    </div>

    <div class="card-main">
      <p class="text-base font-semibold">Search result:</p>
      <!-- List -->
      <div class="card-shadow-main">
        <div class="flex justify-between p-4">
          <AvatarPost />
          <ArrowRightIcon />
        </div>
        <div class="flex justify-between p-4">
          <AvatarPost />
          <ArrowRightIcon />
        </div>
      </div>
      <!-- End -->
      <p>End of result</p>
    </div>
  </div>
</template>
