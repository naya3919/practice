<template>
  <div id="app">
    <TodoList />
    <VFor />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import VFor from './components/VFor.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    VFor
  }
}
</script>

<style>


</style>
