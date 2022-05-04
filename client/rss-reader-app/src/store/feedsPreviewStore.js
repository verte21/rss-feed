import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFetch } from '../composables/useFetch';
import axios from 'axios';

export const useFeedsPreviewStore = defineStore('feedsPreview', {
  state: () => ({
    feeds: [],
    selectedFeedContent: null,
    selectedFeedSite: null,
  }),
  getters: {
    getFeeds(state) {
      return state.feeds;
    },
    getSelectedFeed(state) {
      return state.selectedFeedContent;
    },
    getSelectedSite(state) {
      return state.selectedFeedSite;
    },
  },
  actions: {
    async fetchFeeds(url) {
      try {
        let data;
        await axios
          //http://localhost:4000/api/feeds/parseFeed
          .post(import.meta.env.VITE_RSS_API + 'feeds/parseFeed', {
            feedLink: url,
          })
          .then((res) => {
            this.selectedFeedSite = res.data.feeds;
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
    setSelectedFeedSite(data) {
      this.selectedFeedSite = data;
    },
    resetSelectedFeedSite(data) {
      this.selectedFeedSite = null;
    },
  },
});
