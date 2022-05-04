<template>
  <div
    class="card hover:text-accent cursor-pointer card-compact max-w-xs bg-slate-500 p-1 m-2 w-86 shadow-xl"
  >
    <!-- <figure class="rounded-md">
      <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
    </figure> -->
    <div class="card-body">
      <h4 class="card-title text-sm">{{ title }}</h4>
      <p class="overflow-x-hidden text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'description']);
</script>

<style scoped></style>
