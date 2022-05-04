<template>
  <div class="container shrink-1 max-w-xs bg-neutral overflow-y-auto">
    <h2 class="text-center p-2 pb-0">
      {{ store.getFeeds.length }} feeds in {{ store.selectedFeedSite?.title }}
    </h2>
    <div class="divider"></div>
    <div class="wrapper">
      <ul class="bg-base-100 w-65">
        <li v-for="feed of store.getFeeds" :key="feed._id">
          <CardFeed
            :title="feed.title"
            :description="feed.contentSnippet.slice(0, 130) + '...'"
            @click="selectPreview(feed.content)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useFeedsPreviewStore } from '../../store/feedsPreviewStore';
import CardFeed from './CardFeed.vue';
const store = useFeedsPreviewStore();

function selectPreview(content) {
  store.setActualFeedContent(content);
}
</script>

<style scoped></style>
