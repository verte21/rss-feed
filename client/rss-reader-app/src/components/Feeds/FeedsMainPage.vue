<script setup>
import FeedsList from './FeedsList.vue';
import FeedPrevievMenu from './FeedPrevievMenu.vue';
import StarterPage from './StarterPage.vue';
import ContentPage from './ContentPage.vue';
import { useFeedsPreviewStore } from '../../store/feedsPreviewStore';

const store = useFeedsPreviewStore();
</script>

<template>
  <div class="flex h-screen w-100">
    <FeedsList class="overflow-y-auto" />
    <FeedPrevievMenu class="overflow-y-auto" />

    <StarterPage v-if="store.getSelectedFeed == null" />
    <ContentPage v-else :content="store.getSelectedFeed" />
  </div>
</template>

<style></style>
