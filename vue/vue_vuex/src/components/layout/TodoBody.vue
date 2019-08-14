<template>
  <div id="body" class="body">
    <h1>body</h1>
    <component :is="menuName"></component>
  </div>
</template>

<script>
import MainPage from '../MainPage'
import Board from '../Board'
import TodoList from  '../TodoList'

export default {
  name: 'todobody',
  components: {
    MainPage,
    Board,
    TodoList
  },
  computed: {
    menuName: function(){
      return this.$store.state.menuName
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>

.body {
  border: 2px solid skyblue;
}

</style>