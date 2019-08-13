<template>
  <div id="app">
    <TodoHeader/>
    <TodoBody/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoFooter from './components/layout/TodoFooter'
import TodoHeader from './components/layout/TodoHeader'
import TodoBody from './components/layout/TodoBody'

export default {
  name: 'app',
  components: {
    TodoBody,
    TodoHeader,
    TodoFooter
  }
}
</script>

<style>


</style>
