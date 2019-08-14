import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue ({
  store,
  render: h => h (App)
}).$mount('#app');

/*
render: function(createElement){
  return createElement( App );
}
*/

// v-if
// vue add vuex
// store : this.$store.state.변수이름

// 요구사항
// Header에는 메뉴
// Body에는 내용 (Todo만 보이도록 작업 : TodoList가 보이도록)
// Footer에는 Todo입력이 가능하게 작업.

// 사용
// store, v-if, v-else-if, v-else, computed, components

