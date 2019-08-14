<template>
  <div id="header" class="header">
    <h3>Header 입니다.</h3>
    <button v-for="(item, index) in menuList" :key="index" @click="goLink(item)">
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'todoHeader',
  data() {
    return {
      menuList: []
    }
  },
  created() {
    this.setMenu();
  },
  methods: {
    setMenu(){
      /*this.$store.state.변수이름*/
      this.menuList = this.$store.state.menuList
    },

    goLink(item){
      this.$store.commit('setMenuName',item);
      console.log("item:",item);
    }
  },
}
</script>

<style scoped>

.header {
  border: 1px solid red;
}

</style>