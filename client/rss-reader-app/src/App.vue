<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import './index.css';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import RssFeed from './components/Home.vue';
import FeedsMainPage from './components/Feeds/FeedsMainPage.vue';
import FeedsList from './components/Feeds/FeedsList.vue';
import Home from './components/Home.vue';
import FeedPrevievMenu from './components/Feeds/FeedPrevievMenu.vue';
</script>

<template>
  <main class="flex">
    <header>
      <NavBar />
    </header>

    <section class="flex-1 h-screen w-100">
      <FeedsMainPage />
    </section>
  </main>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-accent-content;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-accent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-accent-focus;
}
</style>
