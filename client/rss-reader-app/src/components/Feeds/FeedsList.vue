<template>
  <div class="menu bg-neutral border border-primary max-w-fit overflow-y-auto">
    <ul>
      <li
        v-for="feed of store.getFeedingSites"
        class="hover:text-accent m-3 overflow-x-hidden cursor-pointer overflow-auto"
        :key="feed._id"
        @click="showPreviews(feed.link)"
      >
        {{ feed.link }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, toRefs } from 'vue';
import { useFeedingSitesStore } from '../../store/feedingSitesStore';
import { useFeedsPreviewStore } from '../../store/feedsPreviewStore';

const store = useFeedingSitesStore();
const feedsPreview = useFeedsPreviewStore();

onMounted(() => {
  store.fetchFeedingSites();
});

async function showPreviews(link) {
  await feedsPreview.fetchFeeds(link);
}
</script>

<style scoped>
p {
  width: 100v;
}
</style>
