<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Preview from '@/views/Preview'

export default {
  name: 'app',
  conponemts: {
    Preview
  },
  async created() {
    await this.loadContent()
  },
  methods: {
    loadContent(){
      return this.$store.dispatch('contentData', this) //store.js의 action의 함수를 사용할때는 dispatch를 사용하여 실행
    }
  },
}
</script>

<style>


</style>
