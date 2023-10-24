<script setup lang="ts">
import IconTitle from "../component/IconTitle.vue";
import { User } from "@/types/common";
type UserCarouselProps = User;
const { alias, avatar, cost, follower, frequency } =
  defineProps<UserCarouselProps>();
</script>
<template>
  <div>
    <img :src="avatar" alt="" srcset="" class="w-[108px] h-[108px] rounded-[8px] object-cover" />
  </div>
  <p class="text-name-main">{{ alias }}</p>
  <IconTitle :title="`${cost} vnd`" which-children="1" />
  <IconTitle :title="`${follower.length} Follower`" which-children="2" />
  <IconTitle :title="`${frequency} news/week`" which-children="3" />
</template>
