<template>
  <div id="body" class="body">
    <h1>body</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from '../MainPage'
import Board from '../Board'
import TodoList from  '../TodoList'

export default {
  name: 'todobody',
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