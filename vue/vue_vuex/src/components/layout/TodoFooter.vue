<template>
  <div id="footer" class="footer">
    <h3>footer입니다.</h3>
    <h3>Todo List 추가</h3>
    <input type="text" v-model="name"> 님이
    <input type="text" v-model="todo" @keyup.enter="addTodo"> 를(을) 해야합니다.
    <input type="button" value="할일 추가" @click="addTodo">
  </div>
</template>

<script>
export default {
  name: 'todoFooter',
  data() {
    return {
      name: '',
      todo: '',
      todoItems: []
    }
  },
  methods: {
    addTodo(){
      let todoList = this.$store.state.todoList
      let newItem = {
        name: this.name,
        todo: this.todo
      }
      todoList.push(newItem)
      this.$store.commit('setTodoList', todoList)
    }
  },
}
</script>

<style scoped>
.footer {
  border: 1px solid black;
}


</style>