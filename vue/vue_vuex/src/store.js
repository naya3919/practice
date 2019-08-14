import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList: ['MainPage', 'Board', 'TodoList'],
    todoList: [],
    menuName: 'MainPage'
  },
  mutations: {
    // 상태 변경
    setTodoList (state, payload){
      state.todoList = payload
    },

    setMenuName(state, payload){
      state.menuName = payload
    }
  },
  actions: {

  }
})
