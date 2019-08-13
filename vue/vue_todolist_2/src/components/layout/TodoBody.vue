<template>
  <div id="body"style="height: 500px;">
    <Home v-if="menuName == 'home'"/>
    <TodoList v-else-if="menuName == 'todo'"/>
    <Board v-else/>
  </div>
</template>

<script>
// v-if
// vue add vuex
// store : this.$store.state.변수이름

// 요구사항
// Header에는 메뉴
// Body에는 내용 (Todo만 보이도록 작업 : TodoList가 보이도록)
// Footer에는 Todo입력이 가능하게 작업.

// 사용
// store, v-if, v-else-if, v-else, computed, components

import Home from '../Home'
import TodoList from '../TodoList'
import Board from '../Board'

export default {
  name: 'TodoBody',
  components: {
    Home,
    TodoList,
    Board
  },
  // data: () => ({
  //   menuName: ''
  // }),
  computed: {
    menuName() {
      console.log('menuName')
      return this.$store.state.currentMenu
    }
  },
  // created() {
    //this.$store.state.aaa = 'aaa'
    //this.$store.commit('setAaa', '변경된 값입니다.123123123')
    //console.log(this.$store.state.aaa)

    // this.menuName =  this.$store.state.currentMenu
    // console.log('this.menuName : ', this.menuName)
  // },
  methods: {

  }

}
</script>

<style>

</style>