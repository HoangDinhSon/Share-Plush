<script setup lang="ts">
import AvatarPost from "./AvatarPost.vue";
import type { Post } from "@/types/common";
import Divider from "primevue/divider";
interface PostProps extends Post {
  dependency?: boolean;
}
const { type, content, listMedia } = defineProps<PostProps>();
</script>
<template>
  <div :class="dependency && 'card-main'">
    <AvatarPost />
    <p class="mb-2">
      {{ content }}
    </p>
    <div>
      <img
        v-if="type == 'picture'"
        class="w-full"
        :src="listMedia[0]"
        alt=""
        srcset=""
      />
      <iframe
        v-if="type == 'video'"
        class="w-full"
        :src="listMedia[0]"
      ></iframe>
    </div>
    <Divider />
  </div>
</template>
