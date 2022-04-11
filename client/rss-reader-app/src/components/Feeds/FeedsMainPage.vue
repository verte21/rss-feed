<script>
import FeedsList from './FeedsList.vue';
import FeedPrevievMenu from './FeedPrevievMenu.vue';
import StarterPage from './StarterPage.vue';
export default {
  components: {
    FeedsList,
    FeedPrevievMenu,
    StarterPage,
  },
};
</script>

<template>
  <div class="flex h-screen w-100">
    <FeedsList class="overflow-y-auto" />
    <FeedPrevievMenu class="overflow-y-auto" />
    <StarterPage />
  </div>
</template>

<style></style>
