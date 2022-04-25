<template>
  <div class="bg-neutral">
    <ul class="bg-base-100 w-65">
      <li><CardFeed /></li>
      <li><CardFeed /></li>
      <li><CardFeed /></li>
      <li><CardFeed /></li>
    </ul>
  </div>
</template>

<script>
//import { useFeedsPreview } from '../../store/feedsPreviewStore';
import CardFeed from './CardFeed.vue';
export default { components: { CardFeed } };

//const store = useFeedsPreview();
// onMounted(() => {
//   store.fetchFeeds('https://zaufanatrzeciastrona.pl/feed/');
// });
</script>

<style scoped></style>
