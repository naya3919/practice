import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    actIndex: 0
  },
  mutations: {
    setActIndex(state, payload) {
      state.actIndex = payload
    }
  },
  actions: {

  }
})
