<template>
  <div class="menu bg-neutral border border-primary">
    <ul>
      <li
        v-for="feed of store.getFeedingSites"
        class="shrink-0 hover:text-accent m-2 p-2 overflow-x-hidden cursor-pointer"
        :key="feed._id"
        @click="showPreviews"
      >
        {{ feed.link }}
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
