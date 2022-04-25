import { onErrorCaptured, reactive, toRefs } from 'vue';

export const useFetch = async (url, options) => {
  const state = reactive({
    isLoading: true,
    hasError: false,
    errorMessage: '',
    data: null,
  });

  const fetchData = async () => {
    state.isLoading = true;

    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      state.data = await res.json();
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
