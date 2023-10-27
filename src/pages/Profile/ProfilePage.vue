<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "@/components/HeadingPage.vue";
import { useNameRouter } from "@/hooks/useNameRouter";
import Post from "@/components/Post.vue";
import { profileOfUser } from "@/services/profileOfUser";
import { ref } from "vue";
import NoData from "@/components/NoData.vue";
import SpaceIntroduceUser from "./component/SpaceIntroduceUser.vue";
const nameRouter = useNameRouter();
const {
  listPost,
  coverPhoto,
  avatar,
  alias,
  numberOfImage,
  numberOfVideo,
  description,
} = profileOfUser;
const items = ref(listPost);
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader :name-router="nameRouter" />
    <SpaceIntroduceUser
      :coverPhoto="coverPhoto"
      :avatar="avatar"
      :alias="alias"
      :numberOfImage="numberOfImage"
      :numberOfVideo="numberOfVideo"
      :description="description"
    />
    <div class="card-main">
      <Post
        v-for="item in items"
        v-if="items.length > 0"
        :id="item.id"
        :id-user="item.idUser"
        :image-avatar="item.imageAvatar"
        :alias-u-ser="item.aliasUSer"
        :time-add="item.timeAdd"
        :time-update="item.timeUpdate"
        :list-media="item.listMedia"
        :content="item.content"
        :type="item.type"
      />
      <NoData v-else content="User don't have any post now. Follow to get notification about newest post later."/>
    </div>
  </div>
</template>

<style>
.blankMiddle {
  padding-top: var(--blank-main);
}
</style>
