<script setup lang="ts">
import SubHeader from "@/components/SubHeader.vue";
import HeadingPage from "@/components/HeadingPage.vue";
import { useNameRouter } from "@/hooks/useNameRouter";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import SearchIcon from "@/assets/icon/SearchIcon.vue";
import { listResultSearch } from "@/services/listResultSearchUser";
import RowForSearch from "./component/RowForSearch.vue";
import NoData from "@/components/NoData.vue";
const nameRouter = useNameRouter();
const value = ref("");
</script>
<template>
  <div class="bg-main">
    <HeadingPage />
    <SubHeader :name-router="nameRouter" />

    <div class="card-main mb-[--blank-primary]">
      <div class="relative">
        <span class="absolute top-[9px] left-4">
          <SearchIcon :scale="0.8" />
        </span>
        <InputText
          v-model="value"
          placeholder="Search name or anything"
          class="pl-[40px] py-[8.5px] w-full text-xs text-[--color-text-main]"
        />
      </div>
    </div>

    <div class="card-main">
      <p class="text-base font-semibold text-[var(--color-text-grey)] mb-6">
        Search result:
      </p>
      <!-- List -->
      <div v-if="listResultSearch.length > 0">
        <div class="card-shadow-main">
          <RowForSearch
            v-for="item in listResultSearch"
            :alias="item.alias"
            :avatar-image="item.avatar"
            :number-of-follower="item.numberOfFollower"
          />
        </div>
        <!-- End -->
        <p class="text-center text-[--text-color-grey]">End of result</p>
      </div>
      <NoData v-else content="Sorry! We can find any matching content. Please try different keywords."/>
    </div>
  </div>
</template>
