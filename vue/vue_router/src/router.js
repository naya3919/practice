import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './components/MainPage.vue'
import Board from './components/Board.vue'
import TodoList from './components/TodoList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    }
  ]
})
