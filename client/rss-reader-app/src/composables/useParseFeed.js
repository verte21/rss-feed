import { onErrorCaptured, reactive, toRefs } from 'vue';
import Parser from 'rss-parser';
let parser = new Parser();

export const useParseFeed = async (url) => {
  const state = reactive({
    isLoading: true,
    hasError: false,
    errorMessage: '',
    data: null,
  });

  const fetchFeed = async (url) => {
    state.isLoading = true;

    try {
      (async (state) => {
        state.data = await parser.parseURL(url);
      })();
    } catch (e) {
      state.hasError = true;
      state.errorMessage = e.message;
    } finally {
      state.isLoading = false;
    }
  };

  await fetchData();

  return { ...toRefs(state) };
};
