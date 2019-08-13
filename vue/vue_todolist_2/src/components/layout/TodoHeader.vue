<template>
  <div id="header">
    <button v-for="item in menu" @click="goLink(item)">{{ item }}</button>
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  data: () => ({
    menu: []
  }),
  created() {
    this.setData()
  },
  methods: {
    setData() {
      this.menu = this.$store.state.menu
    },
    goLink(item) {
      this.$store.commit('setCurrentMenu', item)
      console.log('this.$store.state.currentMenu : ', this.$store.state.currentMenu)
    }
  }
}
</script>

<style>

</style>