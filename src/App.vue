<template>
  <div class="container">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue';
export default {
  components: {
    TodoApp
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  font-size: 1.2rem;
}
</style>
