<script setup lang="ts">
import { ref } from "vue";
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "../../components/HeadingPage.vue";
import ListUserCarousel from "./container/ListUserCarousel.vue";
import Post from "@/components/Post.vue";
import listPost from "@/services/post";
const items = ref(listPost);
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader />
    <ListUserCarousel />
    <div class="card-main ">
      <Post v-for="item in items"
      :id="item.id"
      :id-user="item.idUser"
      :alias-u-ser="item.aliasUSer"
      :time-add="item.timeAdd"
      :time-update="item.timeUpdate"
      :list-media="item.listMedia"
      :content="item.content"
      :type="item.type"
       />
    </div>
  </div>
</template>
<style></style>
