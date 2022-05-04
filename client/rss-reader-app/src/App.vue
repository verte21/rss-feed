<script setup>
import './index.css';
import NavBar from './components/NavBar.vue';
import FeedsMainPage from './components/Feeds/FeedsMainPage.vue';
import TodoMainPage from './components/TodoList/TodoMainPage.vue';
import LoginForm from './components/Forms/LoginForm.vue';
import RegisterForm from './components/Forms/RegisterForm.vue';
</script>

<template>
  <main class="flex">
    <!-- <LoginForm /> -->
    <RegisterForm />

    <!-- after login  -->
    <!-- <header> -->
    <!-- <NavBar /> -->
    <!-- </header> -->
    <!-- <section class="flex-1 h-screen w-100"> -->
    <!-- here will be diff routes -->
    <!-- <TodoMainPage /> -->
    <!-- <FeedsMainPage /> -->
    <!-- </section> -->
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
