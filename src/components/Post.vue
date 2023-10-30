<script setup lang="ts">
import AvatarPost from "./AvatarPost.vue";
import type { Post } from "@/types/common";
import Divider from "primevue/divider";
import PostAuth from "@/components/PostAuth.vue";

interface PostProps extends Post {
  dependency?: boolean;
}
const postProps = defineProps<PostProps>();
const { type, content, listMedia, imageAvatar, aliasUSer, timeUpdate } =
  postProps;
</script>
<template>
  <div :class="dependency && 'card-main'">
    <AvatarPost
      variant="full"
      :kind-of-post="type"
      :avatar-image="imageAvatar"
      :alias-user="aliasUSer"
      :time-update="timeUpdate"
    />
    <p class="my-2 text-post" v-if="type == 'picture' || type == 'video'">
      {{ content }}
    </p>
    <div>
      <img
        v-if="type == 'picture'"
        class="w-full h-[calc((100vw-32px)*0.56)]"
        :src="listMedia[0]"
        alt=""
        srcset=""
      />
      <iframe
        v-if="type == 'video'"
        class="w-full h-[calc((100vw-32px)*0.56)]"
        :src="listMedia[0]"
      ></iframe>
    </div>
    <PostAuth v-if="type == 'auth'" />
    <Divider />
  </div>
</template>
