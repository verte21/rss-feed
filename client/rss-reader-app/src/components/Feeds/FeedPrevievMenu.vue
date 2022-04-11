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
import CardFeed from './CardFeed.vue';
export default { components: { CardFeed } };
</script>

<style scoped></style>
