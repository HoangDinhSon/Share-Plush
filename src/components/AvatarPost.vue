<script setup lang="ts">
import Avatar from "primevue/avatar";
import { KindOfPost } from "@/types/common";
interface AvatarPostProps {
  variant?: "full" | "lack";
  avatarImage?: string;
  aliasUser?: string;
  numberOfFollower?: string|number;
  timeUpdate?: string;
  kindOfPost?: KindOfPost;
}
const { avatarImage, aliasUser, numberOfFollower, kindOfPost } =
  defineProps<AvatarPostProps>();
</script>
<template>
  <div class="flex items-center pl-[14px] ">
    <Avatar
      :image="avatarImage"
      class="mr-2 mt-1 overflow-hidden w-[40px] h-[40px] object-contain"
      size="xlarge"
      shape="circle"
    />
    <div>
      <p class="text-name-main">{{ aliasUser }}</p>
      <p class="text-sub-header-main">
        <span v-if="variant == 'lack'">{{ `${numberOfFollower}K Follower` }}</span>
        <span v-if="variant == 'full'">
          <span> {{ timeUpdate }} </span>
          <span class="ml-1" v-if="kindOfPost == 'video'">Share video</span>
          <span class="ml-1" v-if="kindOfPost == 'picture'">Share image</span>
          <span class="ml-1" v-if="kindOfPost == 'auth'">Private</span>
        </span>
      </p>
    </div>
  </div>
</template>
