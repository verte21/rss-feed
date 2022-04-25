<template>
  <div class="container flex w-100 h-screen overflow-hidden flex-col">
    <div class="todoInfo container border-4">
      <div class="todoForm bg-info">
        <h2 class="text-black text-2xl text-center">Add todo</h2>
      </div>

      <div class="container bg-info">
        <h1 class="text-black text-3xl text-center">Your todo list:</h1>
      </div>
    </div>

    <div class="wrapper todoItems bg-info overflow-y-auto">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  </div>
</template>

<script setup>
import TodoItemVue from './TodoItem.vue';
import TodoItem from './TodoItem.vue';
</script>

<style></style>
