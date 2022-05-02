import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useParseFeed } from '../composables/useParseFeed';

export const useFeedsPreviewStore = defineStore('feedsPreview', {
  state: () => ({
    feeds: [],
  }),
  getters: {
    getFeeds(state) {
      return state.feeds;
    },
  },
  actions: {
    async fetchFeeds(url) {
      try {
        const data = await useParseFeed(url);

        this.feeds = data.value;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
