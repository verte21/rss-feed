<template>
  <div class="shrink-1 max-w-xs bg-neutral">
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
</template>

<script setup>
// import { useFeedsPreviewStore } from '../../store/feedsPreviewStore.js';
import { useFeedsPreviewStore } from '../../store/feedsPreviewStore';
import CardFeed from './CardFeed.vue';

const store = useFeedsPreviewStore();

function selectPreview(content) {
  store.setActualFeedContent(content);
}
// const store = useFeedsPreviewStore();
// onMounted(() => {
//   store.fetchFeeds('https://zaufanatrzeciastrona.pl/feed/');
// });
</script>

<style scoped></style>
