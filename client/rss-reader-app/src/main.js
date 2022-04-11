import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

app.config.globalProperties.axios = axiosInstance;

app.mount('#app');
