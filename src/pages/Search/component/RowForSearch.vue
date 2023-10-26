<script setup lang="ts">
import ArrowRightIcon from "@/assets/icon/ArrowRightIcon.vue";
import AvatarPost from "@/components/AvatarPost.vue";
import DivideMain from "@/components/DivideMain.vue";
interface RowForSearch {
  avatarImage: string;
  alias: string;
  numberOfFollower: string | number;
}
const { avatarImage, alias, numberOfFollower } = defineProps<RowForSearch>();
</script>
<template>
  <div class="flex justify-between items-center">
    <AvatarPost
      :variant="'lack'"
      :avatar-image="avatarImage"
      :alias-user="alias"
      :number-of-follower="numberOfFollower"
    />
    <ArrowRightIcon />
  </div>
  <DivideMain/>
</template>
