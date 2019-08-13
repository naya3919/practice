<template>
  <div>
    <h1>TodoList</h1>
      사용자: <input type="text" v-model="name" /><br/>
      할  일: <input type="text" v-model="todo" /><br/>
      <button @click="addTodo">추가하기</button>
      <ul>
        <li v-for="(item, index) in todoItem" :key="index">
          {{index+1}}번째 할 일 : {{ item.name }}님은 {{ item.todo }} 해야합니다.
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'todoList',
  data: function() {
    return{
      name: '',
      todo: '',
      todoItem: []
    }
  },
  methods: {
    addTodo(){
      this.todoItem.push({
          name: this.name,
          todo: this.todo
        })
      console.log(this.todoItem);
    }
  },
}
</script>

<style>
  
</style>