import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFetch } from '../composables/useFetch';

export const useFeedingSitesStore = defineStore('feedingSites', {
  state: () => ({
    feedingSites: [],
  }),
  getters: {
    getFeedingSites(state) {
      return state.feedingSites;
    },
  },
  actions: {
    async fetchFeedingSites() {
      try {
        const data = await useFetch('http://localhost:4000/api/feeds');
        this.feedingSites = data.data.value;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
