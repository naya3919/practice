<template>
  <div id="footer">
     사용자: <input type="text" v-model="name" /><br/>
      할  일: <input type="text" v-model="todo" /><br/>
      <button @click="addTodo">추가하기</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>