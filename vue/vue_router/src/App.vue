<template>
  <div id="app">
    <MainPage />
    <TodoHeader /><br/><br/>
    <TodoBody /><br/><br/>
    <TodoFooter /><br/><br/>
  </div>
</template>

<script>
import MainPage from './components/MainPage'
import TodoHeader from './components/layout/TodoHeader.vue'
import TodoBody from './components/layout/TodoBody.vue'
import TodoFooter from './components/layout/TodoFooter.vue'

export default {
  name: 'app',
  components: {
    MainPage,
    TodoHeader,
    TodoBody,
    TodoFooter,
  }
}
</script>

<style>

</style>