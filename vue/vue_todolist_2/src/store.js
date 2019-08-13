import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: ['home', 'todo', 'board'],
    currentMenu: 'board'
  },
  mutations: {
    setMenu(state, payload) {
      state.menu = payload
    },
    setCurrentMenu(state, payload) {
      state.currentMenu = payload
    }
  },
  actions: {

  }
})
