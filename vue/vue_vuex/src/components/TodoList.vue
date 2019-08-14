<template>
  <div id="todoList">
    <h1>Todo List 목록</h1>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        사용자 : {{ item.name }}, 할 일 : {{ item.todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todoList',
  computed: {
    todoList: function() {
      return this.$store.state.todoList
    },
  },
}
</script>

<style>

</style>