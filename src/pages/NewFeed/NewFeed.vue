<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Post from "@/components/Post.vue";
import NoData from "@/components/NoData.vue";
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "@/components/HeadingPage.vue";
import listPost from "@/services/post";
import ListUserCarousel from "./container/ListUserCarousel.vue";
const items = ref(listPost);
const router =useRouter();
const nameRouter = router.currentRoute.value.name
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader :name-router="nameRouter"/>
    <ListUserCarousel />
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
      <NoData v-else />
    </div>
  </div>
</template>
<style></style>
