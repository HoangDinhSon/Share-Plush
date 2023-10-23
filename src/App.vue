<script setup lang="ts">
import { ROUTER } from './routes/constant-router';
</script>
<template>
  <div class="fixed top-2 z-10">
    <router-link :to="ROUTER.welcome">welcome</router-link>
    <router-link :to="ROUTER.profile">Profiles pages</router-link>
  </div>
  <router-view></router-view>
</template>
