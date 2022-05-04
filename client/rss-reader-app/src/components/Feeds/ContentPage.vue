<template>
  <div class="container p-5 flex-1 overflow-y-auto border-2 border-primary">
    <div class="content-info">Here will be some info about selected feed</div>
    <span v-html="content"></span>
  </div>
</template>

<script setup>
defineProps(['content']);
</script>

<style scoped>
.container :deep(img) {
  border-radius: 10px 20px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.container :deep(figure) {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.container :deep(p) {
  padding: 10px;
}

.container :deep(a) {
  text-decoration: underline;
}
.container :deep(li) {
  text-align: center;
}
.container :deep(ul) {
  text-align: center;
}
.container:deep(a > img) {
  width: 30%;
}
</style>
