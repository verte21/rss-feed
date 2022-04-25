<template>
  <div
    class="menu bg-neutral border border-primary overflow-x-hidden max-w-fit"
  >
    <ul class="flex-none">
      <li
        v-for="feed of store.getFeedingSites"
        class="shrink-0 hover:text-accent"
        :key="feed._id"
      >
        <p class="w-auto" @click="showPreviews">{{ feed.link }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, toRefs } from 'vue';
import { useFeedingSitesStore } from '../../store/feedingSitesStore';

const store = useFeedingSitesStore();
onMounted(() => {
  store.fetchFeedingSites();
});
</script>

<style scoped>
p {
  width: 100v;
}
</style>
