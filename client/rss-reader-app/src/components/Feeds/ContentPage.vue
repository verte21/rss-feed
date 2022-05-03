<template>
  <div class="container m-5">
    <span v-html="content"></span>
  </div>
</template>

<script setup>
defineProps(['content']);
</script>

<style></style>
