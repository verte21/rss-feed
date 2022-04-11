<template>
  <div class="menu bg-neutral border border-primary overflow-x-hidden">
    <ul class="flex-none">
      <li
        v-for="feed of feeds"
        class="shrink-0 hover:text-accent"
        :key="feed._id"
      >
        <p class="w-auto">{{ feed.link }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { feeds: [] };
  },
  mounted() {
    this.axios
      .get('/feeds')
      .then((result) => {
        this.feeds = result.data.feedsList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
p {
  width: 100v;
}
</style>
