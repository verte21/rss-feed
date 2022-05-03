import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFetch } from '../composables/useFetch';
import axios from 'axios';

export const useFeedsPreviewStore = defineStore('feedsPreview', {
  state: () => ({
    feeds: [],
    selectedFeedContent: null,
  }),
  getters: {
    getFeeds(state) {
      return state.feeds;
    },
    getSelectedFeed(state) {
      return state.selectedFeedContent;
    },
  },
  actions: {
    async fetchFeeds(url) {
      try {
        let data;
        await axios
          .post('http://localhost:4000/api/feeds/parseFeed', {
            feedLink: url,
          })
          .then((res) => {
            this.feeds = res.data.feeds.items;
          })
          .catch((e) => {
            console.log('Parsing feed error');
          });
      } catch (error) {
        console.log(error);
      }
    },
    setActualFeedContent(content) {
      this.selectedFeedContent = content;
    },
    resetFeedContent() {
      this.selectedFeedContent = null;
    },
  },
});
